<script>
	let isOpen = $state(false);
</script>

<nav class="flex flex-col items-center justify-between p-8">
	<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
		<a href="/" class="text-success text-2xl font-bold tracking-tight">
			<img
				src="https://maseholdings.com/wp-content/uploads/2023/01/Move-Us-Logo-Horizontal.webp"
				alt="Move Us Inc"
				class="w-36"
			/>
		</a>

		<button
			class="bg-primary focus:outline-none lg:hidden"
			onclick={() => (isOpen = !isOpen)}
			aria-label="Toggle Menu"
		>
			<svg
				class="h-8 w-8 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>

		<div class="hidden items-center gap-8 lg:flex">
			<ul class="text-secondary flex gap-4 text-lg font-bold tracking-tighter">
				<li><a href="/home" class="text-primary">Home</a></li>
				<li><a href="/about" >About</a></li>
				<li><a href="/service" >Service</a></li>
				<li><a href="/car" >Car</a></li>
				<li><a href="/Booking" >Booking</a></li>
				<li><a href="/Blog" >Blog</a></li>
				<li><a href="/contact" >Contact</a></li>
			</ul>
			<button
				class="btn btn-primary cursor-not-allowed text-lg font-bold tracking-tighter text-white"
			>
				Log in
			</button>
		</div>
	</div>

	{#if isOpen}
		<div class="flex w-full justify-start">
			<div
				class="text-secondary mt-4 flex flex-col space-y-4 px-8 text-lg font-bold tracking-tighter lg:hidden"
			>
				<a href="/home" class="text-primary cursor-not-allowed">Home</a>
				<a href="/about" class="cursor-not-allowed">About</a>
				<a href="/service" class="cursor-not-allowed">Service</a>
				<a href="/car" class="cursor-not-allowed">Car</a>
				<a href="/Booking" class="cursor-not-allowed">Booking</a>
				<a href="/Blog" class="cursor-not-allowed">Blog</a>
				<a href="/Contact" class="cursor-not-allowed">Contact</a>
				<button class="btn btn-primary w-fit cursor-not-allowed text-white">Log in</button>
			</div>
		</div>
	{/if}
</nav>
