<template>
  <div class="tav-header">
    <div class="m-3">
      <b-navbar-brand href="/" class="mr-0">
        <img src="../../assets/logo.png" alt="MINISTA-logo" />
      </b-navbar-brand>
    </div>
    <b-container class="mt-4">
      <b-navbar toggleable="lg" type="light" class="d-flex justify-content-between">
        <!-- PC header -->
        <div class="mr-0">
          <h5 class="user mb-0"><b>Hello Sharon</b></h5>
          <small class="sub-title-user"><b>what would you buy today</b></small>
        </div>

        <div class="d-flex align-items-center">
          <i class="icon-notification mx-2"></i>
          <b-avatar>
            <b-img src="../../assets/images/user.png" alt="user-avatar" width="32px" height="32px"></b-img>
          </b-avatar>
        </div>
      </b-navbar>
      <div class="d-flex justify-content-center mt-4">
        <div class="col-9 px-0">
          <div class="col-9 px-0">
            <i class="icon-search position-absolute"></i>
            <b-form-input class="input-search border-0 py-4" placeholder="Search"></b-form-input>
            <i class="icon-filter position-absolute"></i>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'TavHeader',
};
</script>
