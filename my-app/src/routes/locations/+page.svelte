<script>
  import { enhance } from "$app/forms";
  import Location from "../../components/location.svelte";
  import CreateForm from "../../components/form.svelte";

  /** @type {import("./$types").PageData} */
  export let data;
  function onAddFormActive() {
    data.addForm = !data.addForm;
  }
</script>

{#if !!data}
  <form action="/logout" class="logout">
    <input type="submit" value="Logout" />
  </form>
  <body>
  {#if data.isAdmin}
    <div class="addLocation">
      <button on:click={onAddFormActive}>{data.addForm ? 'close' : 'New'}</button>
      {#if data.addForm}
        <CreateForm></CreateForm>
      {/if}
    </div>
  {/if}
  <div class="location-list">
    {#each data.locations as location (location._id)}
      <Location location="{location}" isAdmin="{data.isAdmin}" data="{data}"></Location>
    {/each}
  </div>
  </body>
{/if}
  <style>
      .addLocation {
          margin: auto;
          text-align: center;
      }

      .addLocation button {
          width: 100px;
          height: 40px;
          border-radius: 60px / 40px;
          border: none;
          background: black;
          color: #EAEBEC;
          cursor: pointer;
          margin-top: 20px;
          font-size: 30px;
          font-family: "Roboto", sans-serif;
      }

      .addLocation button:hover {
          background: #111111;
      }
      .logout input{
          font-family: "Roboto", sans-serif;
          width: 100px;
          height: 40px;
          cursor: pointer;
          background: black;
          color: #EAEBEC;
          font-size: 25px;
      }
  </style>