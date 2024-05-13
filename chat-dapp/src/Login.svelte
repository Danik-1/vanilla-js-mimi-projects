<script>
    import { user } from "./user.js";

    let username;
    let password;

    function login() {
        user.auth(username, password, ({ err }) => err && alert(err));
    }
    function signup() {
        user.create(username, password, ({ err }) => {
            if (err) {
                alert(err);
            } else {
                login();
            }
        });
    }
</script>

<form action="">
    <label for="username">Username</label>
    <input name="username" bind:value={username} minlength={3} maxlength={16} />

    <label for="password">Password</label>
    <input name="password" bind:value={password} type="password" />

    <div class="buttons">
        <button class="login" on:click={login}>Login</button>
        <button class="login" on:click={signup}>Sign Up</button>
    </div>

</form>


<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
    .buttons {
        margin-top: 30px;
    }
    input {
        margin: 6px;
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
        width: 100%
    }
    button {
        width: 100px;
        padding: 7px;
        padding-right: 12px;
        padding-left: 12px;
        border-radius: 10px;
        background: lightgray;
    }
</style>