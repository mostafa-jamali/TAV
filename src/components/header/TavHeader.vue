<template>
  <div class="tav-header">
    <div class="m-3">
      <img src="../../assets/logo.png" alt="MINISTA-logo" />
    </div>
    <b-navbar toggleable="lg" type="light">
      <!-- PC header -->
      <b-container class="d-flex mt-4">
        <b-navbar-brand href="/" class="mr-0">
          <h5 class="user mb-0"><b>Hello Sharon</b></h5>
          <small class="sub-title-user"><b>what would you buy today</b></small>
        </b-navbar-brand>

        <div>
          <b-icon-alarm class="mx-2"></b-icon-alarm>
          <b-avatar>
            <b-img src="../../assets/images/user.png" alt="user-avatar" width="32px" height="32px"></b-img>
          </b-avatar>
        </div>
      </b-container>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'TavHeader',
};
</script>
<style lang="scss" scoped>
.tav-header {
  .user {
    line-height: 0.7rem;
  }
  .sub-title-user {
    font-size: 0.7rem;
  }
}
</style>
