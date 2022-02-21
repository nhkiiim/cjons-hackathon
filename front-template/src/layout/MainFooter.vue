<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
              <a>OLIVENETWORKS</a>
          </li>
          <li>
            <a>
              CHEILJEMYEONJO
            </a>
          </li>
          <li>
            <a>
              FIGHTING
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
       CJ OLIVENETWORKS
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
