<script>
    import { username, user } from "./user.js";
    import ChatMessage from "./ChatMessage.svelte";
    import { onMount } from "svelte";
    import GUN from "gun";
    import SEA from "gun/sea.js";
    const db = GUN();

    let newMessage;
    let messages = [];

    onMount(() => {
        db.get("chat").map().once(async(data, id) => {
            if (data) {
                const key = "#foo";

                var message = {
                    who: db.user(data).get('alias'),
                    what: (await SEA.decrypt(data.what, key)) + '',
                    when: GUN.state.is(data, 'what'),
                }

                if (message.what) {
                    messages = [...messages.slice(-100), message]
                }
            }
        });

    });

    async function sendMessage() {
        const secret = await SEA.encrypt(newMessage, '#foo');
        const message = user.get("all").set({ what: secret, who: $username });
        const index = new Date().toISOString();
        db.get("chat").get(index).put(message);
        newMessage = '';
    }

</script>

<div class="chat">
    {#each messages as m (m.when)}
        <div class='message'>
            <ChatMessage message={m}/>
        </div>
    {/each}
</div>


<form on:submit|preventDefault={sendMessage}>
    <input type="text" name="" id="" bind:value={newMessage}>
    <button type="submit">Send</button>
</form>

<style>
    .chat {
		overflow-y: auto;
        height: 600px;
        position: relative;
    }
    .chat::-webkit-scrollbar {
        display: none;
    }
    .message {
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content:start;
    }
    form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 15px;
        margin-left: 0;
        margin-right: 0;
        font-size: 1.2rem;
    }
    input {
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
    }
    button {
        padding: 7px;
        padding-right: 12px;
        padding-left: 12px;
        border-radius: 10px;
        background: lightgray;
    }
</style>
