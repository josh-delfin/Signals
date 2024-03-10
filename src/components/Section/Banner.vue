<template>
  <section class="background-section">
    <div class="row">
      <!-- First row content -->
      <div class="col">
        <!-- Your content goes here -->
        <p>First Row Content</p>
      </div>
      <!-- Second row content -->
      <div class="col">
        <!-- Your content goes here -->
        <p>Second Row Content</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'YourComponentName',
  // Add your component logic here
}
</script>

<style>
.background-section {
  /* Set background image */
  background-image: url('/src/assets/img/banner.png');
  /* Ensure background covers the section */
  background-size: cover;
  /* Position background image */
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto; /* Center horizontally */
}

.row {
  display: flex;
  justify-content: space-between; /* Align items with space between */
  align-items: center; /* Center items vertically */
}

.col {
  /* Add padding, margin, or any other styling as needed */
  padding: 20px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.8); /* Example background color */
}
</style>
