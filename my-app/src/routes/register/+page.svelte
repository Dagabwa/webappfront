<script>
  import { enhance } from '$app/forms';
  export let form;
</script>
<svelte:head>
  <title>Create an account</title>
</svelte:head>

<form use:enhance method="POST">
  <fieldset class="form-group">
    <input
      class="form-control form-control-lg"
      name="username"
      type="text"
      required
      placeholder="Username"
    />
  </fieldset>
  <fieldset class="form-group">
    <input
      class="form-control form-control-lg"
      name="password"
      type="password"
      required
      placeholder="Password"
    />
  </fieldset>
  <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
  <p>Already have an account? <a href="/login">Login</a></p>
</form>

<style>
    form {
        position: relative;
        z-index: 1;
        background: #FFFFFF;
        max-width: 360px;
        margin: 0 auto 100px;
        padding: 45px;
        text-align: center;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    }

    input {
        font-family: "Roboto", sans-serif;
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    button {
        width: 150px;
        height: 40px;
        border-radius: 60px / 40px;
        border: none;
        background: grey;
        color: #EAEBEC;
        cursor: pointer;
        margin-top: 20px;
        font-size: 30px;
        font-family: "Roboto", sans-serif;
    }

</style>