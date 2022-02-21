import tensorflow as tf
import numpy as np
import os
import easydict
import glob
from imageio import imread, imsave
import cv2
import argparse

args = easydict.EasyDict({
        "no_makeup":'imgs/no_makeup/choooi_result.png'
    })

def preprocess(img):
    return (img / 255. - 0.5) * 2

def deprocess(img):
    return (img + 1) / 2
  
batch_size = 10
img_size = 256

no_makeup = cv2.resize(imread(args.no_makeup), (img_size, img_size))

X_img = np.expand_dims(preprocess(no_makeup), 0)
makeups = glob.glob(os.path.join('imgs', 'makeup2', '*.*'))
result = np.ones((2 * img_size, (len(makeups) + 1) * img_size, 3))
result[img_size: 2 *  img_size, :img_size] = no_makeup / 255.

tf.reset_default_graph()
sess = tf.Session()
sess.run(tf.global_variables_initializer())

saver = tf.train.import_meta_graph(os.path.join('model', 'model.meta'))
saver.restore(sess, tf.train.latest_checkpoint('model'))

graph = tf.get_default_graph()
X = graph.get_tensor_by_name('X:0')
Y = graph.get_tensor_by_name('Y:0')
Xs = graph.get_tensor_by_name('generator/xs:0')

for i in range(len(makeups)):
    makeup = cv2.resize(imread(makeups[i]), (img_size, img_size))
    Y_img = np.expand_dims(preprocess(makeup), 0)
    Xs_ = sess.run(Xs, feed_dict={X: X_img, Y: Y_img})
    Xs_ = deprocess(Xs_)
    result[:img_size, (i + 1) * img_size: (i + 2) * img_size] = makeup / 255.
    result[img_size: 2 * img_size, (i + 1) * img_size: (i + 2) * img_size] = Xs_[0]
    
imsave('result/result_choooi_100.jpg', result)
