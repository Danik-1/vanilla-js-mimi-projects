<script>
	import Header from "./Header.svelte";
	import Login from "./Login.svelte";
	import Chat from "./Chat.svelte";
	import { username } from "./user";
</script>

<div class="app">
	<Header />
	{#if $username}
		<Chat />
	{:else}
		<Login />
	{/if}
</div>

<style>
	.app {
		width: 400px;
		margin: auto;
		margin-top: 100px;
		height: 800px;
	}
</style>