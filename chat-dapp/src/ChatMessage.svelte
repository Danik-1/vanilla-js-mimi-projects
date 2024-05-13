<script>
    export let message;
    console.log(message)
</script>

<div>
    <div></div>
    <div class="message">
        {message.what}
    </div>
</div>

<style>
    .message {
        width: fit-content;
        margin: 7px;
        padding: 10px;
        border-radius: 10px;
        background: lightgray;
    }
</style>
