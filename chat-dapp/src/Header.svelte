<script>
    import { username, user } from "./user.js";

    function signOut() {
        user.leave();
        username.set('');
    }
</script>

<header>
    {#if $username}
        <div class="user-bio">
            <span><strong>{$username}</strong></span>
        </div>

        <button class="signout-btn" on:click={signOut}>Sign Out</button>
    {:else}
        <span>Gun.js Chat</span>
    {/if}
</header>

<style>
    header {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: darkblue;
        color: white;
    }
    button {
        padding: 7px;
        border-radius: 10px;
        border: solid 1px white;
    }
</style>