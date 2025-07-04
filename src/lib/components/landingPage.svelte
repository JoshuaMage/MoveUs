<script lang="ts">
	import SvgArrow from '$lib/sharedComponents/svgArrow.svelte';
	import { slide } from 'svelte/transition';
	type SvgIconName = 'arrowTopRight' | 'location' | 'csr' | 'safety';

	let selectedIndex = $state(0);
	let currentIndex = $state(0);
	let currentPage = $state(0);

	const autoSlideDelay = 5000;
	let interval: ReturnType<typeof setInterval> | null = null;

	let visibleCount = $state(5);
	const feedbackCount = $state(3);

	let showGuidelines: number | null = $state(null);

	const bookNow = [
		{
			image: '/clientImages/bmw.jpg',
			alt: 'Toyota HiAce',
			// // category: 'PREMIUM',
			// bookCar: 'Book Now',
			carType: 'Toyota HiAce',
			price: '90',
			viewDetails: 'View Details',
			book: 'Book'
		},
		{
			image: '/clientImages/Range.jpg',
			alt: 'Toyota Innova',
			// // category: 'PREMIUM',
			// bookCar: 'Book Now',
			carType: 'Toyota Innova',
			price: '100',
			viewDetails: 'View Details',
			book: 'Book'
		},
		{
			image: '/clientImages/audi.jpg',
			alt: 'Isuzu Travis',
			// // category: 'PREMIUM',
			// bookCar: 'Book Now',
			carType: 'Isuzu Travis',
			price: '80',
			viewDetails: 'View Details',
			book: 'Book'
		}
	];

	const service = [
		{
			image: 'https://html.awaikenthemes.com/novaride/light/images/icon-service-1.svg',
			alt: 'Driver',
			title: 'Car Rental With Driver',
			description: 'Enhance your rental experience with additional options.'
		},
		{
			image: 'https://html.awaikenthemes.com/novaride/light/images/icon-service-2.svg',
			alt: 'Business',
			title: 'Business Car Rental',
			description: 'Enhance your rental experience with additional options.'
		},
		{
			image: 'https://html.awaikenthemes.com/novaride/light/images/icon-service-3.svg',
			alt: 'AirTrans',
			title: 'Airport Transfer',
			description: 'Enhance your rental experience with additional options.'
		},
		{
			image: 'https://html.awaikenthemes.com/novaride/light/images/icon-service-4.svg',
			alt: 'ChauffeurService',
			title: 'Chauffeur Service',
			description: 'Enhance your rental experience with additional options.'
		}
	];

	const carSelection = [
		{
			car: '/clientImages/bmw.jpg',
			alt: 'Toyota HiAce',
			carType: 'Van',
			carName: 'Toyota HiAce 2025',
			passenger: '12 Passenger',
			door: '4 Door',
			bags: '8 Bags',
			type: 'Manual',
			price: '100'
		},
		{
			car: '/clientImages/Range.jpg',
			alt: 'Toyota Innova',
			carType: 'Minivan',
			carName: 'Toyota Innova 2025',
			passenger: '7 passenger',
			door: '4 Door',
			bags: '6 Bags',
			type: 'manual',
			price: '60'
		},
		{
			car: '/clientImages/audi.jpg',
			alt: 'Isuzu Travis',
			carType: 'Luxury',
			carName: 'Isuzu Travis 2025',
			passenger: '15 passenger',
			door: '4 Door',
			bags: '16 Bags',
			type: 'PUV',
			price: '80'
		},
		{
			car: '/clientImages/bmw.jpg',
			alt: 'Toyota HiAce',
			carType: 'Van',
			carName: 'Toyota HiAce 2025',
			passenger: '12 Passenger',
			door: '4 Door',
			bags: '8 Bags',
			type: 'Manual',
			price: '100'
		},
		{
			car: '/clientImages/Range.jpg',
			alt: 'Toyota Innova',
			carType: 'Minivan',
			carName: 'Toyota Innova 2025',
			passenger: '7 passenger',
			door: '4 Door',
			bags: '6 Bags',
			type: 'manual',
			price: '60'
		}
	];

	const guidelines = [
		{
			image: 'https://html.awaikenthemes.com/novaride/light/images/icon-how-it-work-1.svg',
			alt: 'browser',
			title: 'Browse And Select',
			description:
				'Browse our premium fleet of vehicles, customize your rental with flexible pickup and return dates, and choose the location that suits your journey best.'
		},
		{
			image: 'https://html.awaikenthemes.com/novaride/light/images/icon-how-it-work-2.svg',
			alt: 'book',
			title: 'Book And Confirm',
			description:
				'Discover a wide range of premium vehicles, set your preferred pickup and return dates, and choose the most convenient location for your trip'
		},
		{
			image: 'https://html.awaikenthemes.com/novaride/light/images/icon-how-it-work-3.svg',
			alt: 'rider',
			title: 'Book And Enjoy',
			description:
				'Unlock a world of high-end vehicles—book your ideal dates and location for a seamless travel experience'
		}
	];

	const chooseUs: {
		icon: SvgIconName;
		alt: string;
		title: string;
		description: string;
	}[] = [
		{
			icon: 'arrowTopRight',
			alt: '',
			title: 'Diverse Vehicle Selection',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse doloribus facere veniam'
		},
		{
			icon: 'location',
			alt: '',
			title: 'Easily Accessible Locations',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse doloribus facere veniam'
		},
		{
			icon: 'csr',
			alt: '',
			title: 'Dedicated Client Care',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse doloribus facere veniam'
		},
		{
			icon: 'safety',
			alt: '',
			title: 'Secure, Reliable Transportation',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse doloribus facere veniam'
		}
	];

	const feedback = [
		{
			title: 'Requirements for Renting a Car',
			description:
				'Browse our premium fleet of vehicles, customize your rental with flexible pickup and return dates, and choose the location that suits your journey best.'
		},
		{
			title: 'Schedule and Confirm Your Reservation',
			description:
				'Discover a wide range of premium vehicles, set your preferred pickup and return dates, and choose the most convenient location for your trip'
		},
		{
			title: 'Make a Reservation and Enjoy Your Journey',
			description:
				'Unlock a world of high-end vehicles—book your ideal dates and location for a seamless travel experience'
		}
	];

	const testimonials = [
		{
			image:
				'https://img.freepik.com/free-photo/young-man-sad-expression_1194-2826.jpg?semt=ais_hybrid&w=740',
			alt: 'customer',
			rate: '',
			feedback:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta repellat inventore delectus, recusandae ut sapiente, in ex alias odit',
			name: 'Joshua White',
			postion: 'Customer'
		},
		{
			image:
				'https://media.istockphoto.com/id/2006436002/video/happy-confident-and-portrait-of-indian-man-in-office-with-creative-professional-at-tech.jpg?s=640x640&k=20&c=vcKAWd0sGJpV3xR0AK1RCM7zTEpFUcBhQEXbNvN1M78=',
			alt: 'customer',
			rate: '',
			feedback:
				'Mollitia dicta repellat inventore delectus, recusandae ut sapiente, in ex alias odit Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			name: 'Ann Miles',
			postion: 'Customer'
		},
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTE8WaJYfoLdKPUoVFvhOWtAKmDepJaQtQw&s',
			alt: 'customer',
			rate: '',
			feedback:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta repellat inventore delectus, recusandae ut sapiente, in ex alias odit',
			name: 'Jade curso',
			postion: 'Customer'
		},
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4RWcDN_O2n602TcxqD1avXYLNCWQ8v2ggw&s',
			alt: 'customer',
			rate: '',
			feedback:
				'inventore delectus, recusandae ut sapiente, in ex alias odit Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta repellat ',
			name: 'Poole Jordan',
			postion: 'Customer'
		},
		{
			image:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNwCFUH4lXnD7Nq5pBouajRv-sB0gAm-S7g&s',
			alt: 'customer',
			rate: '',
			feedback:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta repellat inventore delectus, recusandae ut sapiente, in ex alias odit',
			name: 'Drake Green',
			postion: 'Customer'
		}
	];

	function selectCar(index: number) {
		selectedIndex = index;
		console.log('Clicked index:', index);
	}

	$effect(() => {
		const interval = setInterval(() => {
			selectedIndex = (selectedIndex + 1) % bookNow.length;
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	});

	$effect(() => {
		if (typeof window === 'undefined') return;

		function updateVisibleCount() {
			visibleCount = window.innerWidth < 1281 ? 3 : 5;
		}

		updateVisibleCount();

		window.addEventListener('resize', updateVisibleCount);
		return () => window.removeEventListener('resize', updateVisibleCount);
	});

	function getVisibleCars() {
		// Wrap around logic
		const visible = [];
		for (let i = 0; i < visibleCount; i++) {
			const index = (currentIndex + i) % carSelection.length;
			visible.push(carSelection[index]);
		}
		return visible;
	}

	function next() {
		currentIndex = (currentIndex + 1) % carSelection.length;
		resetTimer();
	}

	function prev() {
		currentIndex = (currentIndex - 1 + carSelection.length) % carSelection.length;
		resetTimer();
	}

	function resetTimer() {
		if (interval) clearInterval(interval);
		startAutoSlide();
	}

	function startAutoSlide() {
		interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % carSelection.length;
		}, autoSlideDelay);
	}

	$effect(() => {
		startAutoSlide();
		return () => interval && clearInterval(interval);
	});

	function toggle(index: number) {
		showGuidelines = showGuidelines === index ? null : index;
	}

	function getFeedbacks() {
		const visible = [];
		for (let i = 0; i < feedbackCount; i++) {
			const index = (currentPage + i) % testimonials.length;
			visible.push(testimonials[index]);
		}
		return visible;
	}

	function nextPage() {
		currentPage = (currentPage + 1) % testimonials.length;
	}

	function prevPage() {
		currentPage = (currentPage - 1 + testimonials.length) % testimonials.length;
	}
</script>

<div class=" flex justify-center overflow-hidden">
	<div class="flex flex-col gap-20 p-10">
		<div class="place-items-center overflow-hidden">
			<div class="flex w-full flex-col">
				<div>
					{#if bookNow[selectedIndex]}
						<div
							class="relative flex h-screen max-h-[800px] justify-center rounded-4xl bg-cover bg-no-repeat transition-all duration-500 ease-in-out"
							style="background-image: url({bookNow[selectedIndex].image})"
						>
							<div
								class="flex w-full flex-col justify-end px-10 max-xl:gap-10 xl:grid xl:max-w-7xl xl:grid-cols-2"
							>
								<div
									class="flex w-full flex-col text-center xl:max-w-6xl xl:items-start xl:justify-end"
								>
									<h2
										class="text-primary mb-2 font-serif text-2xl font-black tracking-wider sm:text-7xl"
									>
										MoveUS Inc.
									</h2>
									<p class="mb-8 text-2xl font-bold">
										{bookNow[selectedIndex].carType}
										<strong class="text-primary">${bookNow[selectedIndex].price}/DAY</strong>
									</p>
									<div class="flex justify-center gap-4">
										<button class="btn sm:btn-lg cursor-not-allowed"
											>{bookNow[selectedIndex].viewDetails}
											<SvgArrow name="arrowTopRight" size={32} color="black" /></button
										>
										<button class="btn sm:btn-lg btn-primary text-white"
											>{bookNow[selectedIndex].book}<SvgArrow
												name="arrowTopRight"
												size={32}
												color="white"
											/></button
										>
									</div>
								</div>

								<div class="flex justify-center gap-2 xl:flex-col xl:items-end xl:justify-end">
									{#each bookNow as _, index}
										<button
											class="size-4 sm:size-8 rounded-full border-2 transition-all duration-300 ease-in-out
								{selectedIndex === index ? 'bg-primary  border-white' : 'border-secondary bg-secondary'}"
											onclick={() => selectCar(index)}
											aria-label="button"
										></button>
									{/each}
								</div>

								<div class="col-span-2 mb-4 grid items-end justify-center">
									<div
										class="bg-primary grid grid-cols-2 items-end justify-center gap-4 rounded-4xl p-4 max-sm:flex max-sm:flex-wrap sm:p-6 md:grid-cols-3 xl:flex"
									>
										<div class="flex items-center gap-2">
											<img
												src="https://html.awaikenthemes.com/novaride/light/images/icon-rent-details-1.svg"
												alt=""
												class="size-8 invert filter"
											/>
											<div>
												<h3 class="font-semibold text-white">Car Type</h3>
												<label class="select max-sm:select-sm">
													<span class="label">Choose Cars</span>
													<select class="w-full">
														<option>Crimson</option>
														<option>Amber</option>
														<option>Velvet</option>
													</select>
												</label>
											</div>
										</div>

										<div class="flex items-center gap-2">
											<img
												src="https://html.awaikenthemes.com/novaride/light/images/icon-rent-details-2.svg"
												alt="pickupLocation"
												class="size-8 invert filter"
											/>

											<div>
												<h3 class="font-semibold text-white">Pickup Location</h3>
												<label class="select max-sm:select-sm">
													<span class="label">Location</span>
													<select>
														<option>Crimson</option>
														<option>Amber</option>
														<option>Velvet</option>
													</select>
												</label>
											</div>
										</div>

										<div class="flex items-center gap-2">
											<img
												src="https://html.awaikenthemes.com/novaride/light/images/icon-rent-details-3.svg"
												alt="pickupDate"
												class="size-8 invert filter"
											/>
											<div class="mr-4">
												<h3 class="font-semibold text-white">Pickup Date</h3>
												<input type="datetime-local" class="input max-sm:input-sm w-40 rounded px-2 py-1 text-sm" />
											</div>
										</div>

										<div class="flex items-center gap-2">
											<img
												src="https://html.awaikenthemes.com/novaride/light/images/icon-rent-details-4.svg"
												alt="dropoff"
												class="size- invert filter"
											/>
											<div>
												<h3 class="font-semibold text-white">Dropoff Location</h3>
												<label class="select max-sm:select-sm">
													<span class="label">Location</span>
													<select>
														<option>Crimson</option>
														<option>Amber</option>
														<option>Velvet</option>
													</select>
												</label>
											</div>
										</div>

										<div class="flex items-center gap-2">
											<img
												src="https://html.awaikenthemes.com/novaride/light/images/icon-rent-details-2.svg"
												alt="return date"
												class="size-8 invert filter"
											/>
											<div>
												<h3 class="font-semibold text-white">Return Date</h3>
												<input type="datetime-local" class="input max-sm:input-sm w-40 rounded px-2 py-1 text-sm" />
											</div>
										</div>

										<div class="ml-4 flex justify-center">
											<button class="btn btn-white text-primary w-30 font-black">Book</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class=" place-items-center py-20">
			<div class="grid h-full w-full gap-10 xl:max-w-[1536px] 2xl:grid-cols-2">
				<div class="relative mx-auto w-full max-w-3xl">
					<img
						src="https://maseholdings.com/wp-content/uploads/2023/01/Move-Us-Thumbnail.webp"
						alt="warehouse"
						class="h-auto w-full rounded-xl object-cover"
						style="clip-path: polygon(53% 0, 54% 36%, 100% 37%, 100% 100%, 0 99%, 0% 60%, 0 0);"
					/>

					<div
						class="absolute top-[-2%] left-[55%] aspect-video w-[45%] max-w-[400px] overflow-hidden rounded-xl"
					>
						<iframe
							src="https://www.youtube.com/embed/cCk4lxIP80U"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							class="h-full w-full"
						></iframe>
					</div>
				</div>

				<div class="mx-auto flex flex-col justify-center gap-6 max-2xl:items-center ">
					<h6 class="text-primary text-xl font-bold">* About us</h6>
					<p class="text-secondary font-serif max-sm:text-2xl sm:text-5xl font-bold tracking-wider max-sm:text-center ">
						Your Go-To for Trustworthy Car & Motor Rentals
					</p>
					<p class="text-secondary text-lg tracking-tight text-balance  max-2xl:text-center ">
						Move Us Inc. is engaged in conducting, and carrying on the business of buying from
						domestic and international manufacturers, wholesale and/or retailers, selling,
						distributing, and marketing at wholesale/retail all kinds of goods, commodities, wares,
						and merchandise.
					</p>
					<div class="flex flex-col gap-6">
						<div class="group relative flex items-center gap-5">
							<div
								class="bg-primary absolute size-14 rounded-full opacity-20 transition-opacity duration-300 group-hover:opacity-70"
							></div>

							<img
								src="https://html.awaikenthemes.com/novaride/light/images/icon-about-trusted-1.svg"
								alt="phone"
								class="relative z-10 size-20"
							/>

							<div>
								<h6 class="text-secondary mb-2 font-serif text-2xl font-bold tracking-wide">
									Easy Booking Process
								</h6>
								<p class="text-secondary text-sm">
									We Have Optimized The Booking Process So That Our Clients Can Experience The
									Easiest and the Safest service
								</p>
							</div>
						</div>

						<div class="group relative flex items-center gap-5">
							<div
								class="bg-primary absolute size-14 rounded-full opacity-20 transition-opacity duration-300 group-hover:opacity-70"
							></div>
							<img
								src="https://html.awaikenthemes.com/novaride/light/images/icon-about-trusted-2.svg"
								alt="car"
								class="relative z-10 size-20"
							/>
							<div class=" bg-primary absolute size-14 rounded-full opacity-20"></div>
							<div>
								<h6 class="text-secondary mb-2 font-serif text-2xl font-bold tracking-wide">
									Convenient Pick-up & Return Process
								</h6>
								<p class="text-secondary text-sm">
									We Have Optimized The Booking Process So That Our Clients Can Experience The
									Easiest and the Safest service
								</p>
							</div>
						</div>
					</div>
					<div>
						<button class="btn btn-lg btn-primary text-white"
							>Contact Us <SvgArrow name="arrowTopRight" size={32} color="white" /></button
						>
					</div>
				</div>
			</div>
		</div>

		<div class="place-items-center">
			<div class="bg-primary/10 w-full max-w-[1800px] rounded-2xl p-10">
				<div class="mb-10 text-center">
					<h6 class="text-primary mb-6 text-2xl font-black">* Our Services</h6>
					<p class="text-secondary font-serif text-4xl font-black tracking-widest">
						Explore our wide range of <br /> rental Service
					</p>
				</div>

				<div class="flex justify-center">
					<div class="grid max-w-[80%] grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-4">
						{#each service as { image, alt, title, description }}
							<div
								class="group relative flex flex-col place-items-center overflow-hidden rounded-xl bg-white p-6 text-center transition-colors duration-1000 hover:text-white md:items-start"
							>
								<div
									class="before:bg-primary absolute inset-0 z-0 rounded-xl before:absolute before:inset-x-0 before:bottom-0 before:z-0 before:h-0 before:transition-all before:delay-100 before:duration-500 group-hover:before:h-full"
								></div>

								<img
									src={image}
									{alt}
									class="relative z-10 mb-4 h-16 w-16 transition duration-300 group-hover:brightness-0 group-hover:invert"
								/>
								<h5
									class="text-secondary relative z-10 mb-2 font-serif text-2xl font-bold tracking-wider transition-colors duration-300 group-hover:text-white"
								>
									{title}
								</h5>
								<p
									class="text-secondary relative z-10 mb-4 text-start text-sm transition-colors duration-300 group-hover:text-white"
								>
									{description}
								</p>
								<button
									class="btn bg-primary hover:bg-primary/80 relative z-10 rounded-full p-3 text-white transition-colors duration-200"
								>
									<SvgArrow name="arrowTopRight" size={32} color="white" />
								</button>
							</div>
						{/each}
					</div>
				</div>

				<div class="my-20 flex flex-col place-items-center gap-6">
					<p class="text-lg font-semibold">
						Discover our range of car rental services designed to meet all your travel needs. From a
						diverse fleet of vehicles to flexible rental plans.
					</p>
					<button class="btn btn-lg btn-primary text-white">View All service</button>
				</div>
			</div>
		</div>

		<div class="place-items-center">
			<div>
				<div class="mb-8 text-center">
					<h6 class="text-primary mb-4 text-xl font-bold">* Our Fleets</h6>
					<p class="text-secondary font-serif text-2xl font-bold">
						Your Next Adventure Starts Here
					</p>
				</div>

				<div class="grid justify-items-center gap-4 lg:grid-cols-3 2xl:grid-cols-5">
					{#each getVisibleCars() as car}
						<div
							class="border-secondary cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-md"
							onclick={next}
							tabindex="0"
							role="button"
							onkeydown={(e) => e.key === 'Enter' && next()}
							aria-label="Next car"
						>
							<img src={car.car} alt={car.alt} class="h-48 w-90 object-cover" />

							<div class="flex flex-col gap-4 p-3">
								<p
									class="bg-secondary w-fit rounded-full px-3 py-1 text-center text-xs font-semibold tracking-wide text-white uppercase"
								>
									{car.carType}
								</p>
								<h5 class="font-serif text-xl tracking-wider">{car.carName}</h5>
								<div class="text-secondary grid grid-cols-2 gap-x-4 gap-y-2 text-sm mx-2">
									<div class="flex flex-col items-start gap-y-2">
										<div class="flex items-center gap-2">
											<img
												class="h-5 w-5"
												src="https://html.awaikenthemes.com/novaride/light/images/icon-fleet-list-1.svg"
												alt="passenger"
											/>
											<span>{car.passenger}</span>
										</div>
										<div class="flex items-center gap-2">
											<img
												class="h-5 w-5"
												src="https://html.awaikenthemes.com/novaride/light/images/icon-fleet-list-3.svg"
												alt="bags"
											/>
											<span>{car.bags}</span>
										</div>
									</div>

									<div class="flex flex-col items-end gap-y-2">
										<div class="flex items-center gap-2">
											<img
												class="h-5 w-5"
												src="https://html.awaikenthemes.com/novaride/light/images/icon-fleet-list-2.svg"
												alt="door"
											/>
											<span>{car.door}</span>
										</div>
										<div class="flex items-center gap-2">
											<img
												class="h-5 w-5"
												src="https://html.awaikenthemes.com/novaride/light/images/icon-fleet-list-4.svg"
												alt="type"
											/>
											<span>{car.type}</span>
										</div>
									</div>
								</div>

								<div class="border-t-1"></div>
								<div class="flex items-center justify-between">
									<p class="text-secondary font-bold">${car.price}/Day</p>
									<button
										class="bg-primary hover:bg-secondary hover:bg-opacity-90 btn rounded-md px-4 py-1 text-white transition"
										type="button"
									>
										<SvgArrow name="arrowTopRight" size={24} color="white" />
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Prev/Next Buttons -->
				<div class="flex justify-center gap-10 p-6">
					<button class="btn btn-primary" onclick={prev}>
						<SvgArrow name="arrowLeft" size={24} color="white" />
					</button>
					<button class="btn btn-primary" onclick={next}>
						<SvgArrow name="arrowRight" size={24} color="white" />
					</button>
				</div>
			</div>
		</div>

		<div class="place-items-center">
			<div class="w-auto">
				<div class="grid gap-6 2xl:grid-cols-2">
					<div class="flex flex-col gap-4">
						<h6 class="text-primary text-xl font-bold">* How It Work</h6>
						<p class="text-secondary font-serif text-4xl sm:text-6xl font-bold tracking-wider">
							Quick and easy rentals <br class="max-sm:hidden" />no hassle, just drive
						</p>
						<p class="text-xl font-semibold text-balance">
							From easy online reservations to convenient pick-up and drop-off, our streamlined <br
							/>
							process is designed to deliver a smooth, efficient rental experience every time.
						</p>
						<div class="grid gap-4 pr-10">
							{#each guidelines as { image, alt, title, description }, index}
								<div class="border-secondary my-4 grid w-full grid-cols-2 items-center">
									<div class="flex items-start gap-4">
										<img src={image} {alt} />
										<p class="text-2xl font-medium text-nowrap">{title}</p>
									</div>

									<div class="flex w-full justify-end">
										<button class="btn" onclick={() => toggle(index)}>
											{#if showGuidelines === index}
												<SvgArrow name="arrowUp" size={24} color="white" />
											{:else}
												<SvgArrow name="arrowDown" size={20} color="white" />
											{/if}
										</button>
									</div>
								</div>
								<div>
									{#if showGuidelines === index}
										<p
											class="text-secondary col-span-2 m-4 grid sm:w-2xl font-semibold max-sm:overflow-hidden"
											transition:slide
										>
											{description}
										</p>
									{/if}
								</div>
								<hr />
							{/each}
						</div>
					</div>
					<div class="flex h-[600px] items-center justify-center">
						<img
							src="https://maseholdings.com/wp-content/uploads/2023/01/Move-Us-Thumbnail.webp"
							alt="warehouse"
							class="h-full rounded-2xl object-contain"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="place-items-center">
			<div
				class="h-screen max-h-[800px] w-full rounded-2xl bg-cover bg-center bg-no-repeat text-center"
				style="background-image: url('/clientImages/carForest.jpg');"
			>
				<div class="flex h-full flex-col flex-wrap justify-center gap-10">
					<p class="font-serif text-3xl sm:text-5xl font-bold tracking-wider text-gray-200 xl:text-7xl">
						Discover the ease and convenience <br /> of renting with Us
					</p>
				</div>
			</div>
		</div>

		<div class="place-items-center py-20">
			<div>
				<div class="mb-10 text-center">
					<h6 class="text-primary mb-6 text-2xl font-bold">* Why Choose Us</h6>
					<p class="text-secondary font-serif text-3xl sm:text-5xl font-semibold tracking-wider">
						Delivering excellence, every step of the way
					</p>
				</div>

				<div class="grid gap-8 2xl:grid-cols-3">
					<div class="space-y-10">
						{#each chooseUs.slice(0, 2) as { icon, title, description }}
							<div class="flex justify-center gap-4">
								<div>
									<SvgArrow name={icon} size={40} color="black" />
								</div>
								<div>
									<p class="mb-2 text-2xl font-bold tracking-tight">{title}</p>
									<p class="text-secondary text-lg font-semibold text-balance">{description}</p>
								</div>
							</div>
							<div class="flex w-full justify-start">
								<hr class="flex]" />
							</div>
						{/each}
					</div>

					<div class="flex justify-center">
						<img
							src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/why-choose-car-img.png"
							alt="car Transparent"
							class="h-auto max-w-full"
						/>
					</div>

					<div class="flex flex-col space-y-10">
						{#each chooseUs.slice(2, 4) as { icon, title, description }}
							<div class="flex gap-4">
								<div>
									<SvgArrow name={icon} size={40} color="black" />
								</div>
								<div>
									<p class="mb-2 text-2xl font-bold tracking-tight">{title}</p>
									<p class="text-secondary text-lg font-semibold text-balance">{description}</p>
								</div>
							</div>
							<div class="flex w-full justify-start">
								<hr class="flex" />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div class="bg-primary/15 place-items-center rounded-2xl">
			<div>
				<div class="grid gap-20 py-10 xl:grid-cols-2">
					<div class="relative mx-auto flex h-[500px] max-h-[500px] overflow-hidden">
						<img
							src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/our-faqs-img-1.jpg"
							alt=""
							style="clip-path: polygon(0 0, 42% 0, 100% 100%, 53% 100%);"
						/>
						<img
							src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/our-faqs-img-2.jpg"
							alt=""
							style="clip-path: polygon(0 0, 42% 0, 100% 100%, 53% 100%);"
						/>
						<img
							src="https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/our-faqs-car-img.png"
							alt="warehouse"
							class="absolute top-40"
						/>
					</div>

					<div class="flex flex-col gap-4 px-10 max-xl:text-center">
						<h6 class="text-primary text-xl font-bold">* Questions and Answers</h6>
						<p class="text-secondary font-serif text-3xl sm:text-5xl font-bold tracking-wider">
							Essential Information Regarding Our Services
						</p>
						<div class="grid w-full gap-4">
							{#each feedback as { title, description }, index}
								<div class="border-secondary my-4 grid w-full grid-cols-2 items-center">
									<div class="flex items-start gap-4">
										<p class="text-xl font-medium  sm:text-nowrap">{title}</p>
									</div>

									<div class="flex w-full justify-end">
										<button class="btn" onclick={() => toggle(index)}>
											{#if showGuidelines === index}
												<SvgArrow name="arrowUp" size={24} color="white" />
											{:else}
												<SvgArrow name="arrowDown" size={20} color="white" />
											{/if}
										</button>
									</div>
									{#if showGuidelines === index}
										<p class="text-secondary col-span-2 m-4 grid font-semibold" transition:slide>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quam, atque
											laborum ex laboriosam omnis libero modi numquam reprehenderit rem eveniet
											animi molestias suscipit, quia quisquam quibusdam obcaecati aspernatur
											facilis.
										</p>
									{/if}
								</div>
								<hr />
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div
			class="place-items-center rounded-2xl py-10"
			style="background-image: url(/clientImages/world.jpg);"
		>
			<h6 class="text-primary text-xl font-bold text-center">* Testimonials</h6>
			<p class="text-secondary text-3xl text-center sm:text-5xl font-bold tracking-wider">
				Feedback from Our Valued Customers
			</p>

			<div class="mt-20 grid gap-10 max-sm:items-center xl:grid-cols-3">
				{#each getFeedbacks() as feedback}
					<div class="card bg-base-100 w-96 gap-6 p-4 shadow-sm">
						<div class="rating">
							<input type="radio" class="mask mask-star-2 bg-orange-400" checked disabled />
							<input type="radio" class="mask mask-star-2 bg-orange-400" checked disabled />
							<input type="radio" class="mask mask-star-2 bg-orange-400" checked disabled />
							<input type="radio" class="mask mask-star-2 bg-orange-400" checked disabled />
							<input type="radio" class="mask mask-star-2 bg-orange-400" checked disabled />
						</div>
						<p class="text-secondary">
							{feedback.feedback}
						</p>

						<hr class="border-secondary mx-6" />
						<div class="mx-6 flex gap-4">
							<div class="avatar avatar-online">
								<div class="w-14 rounded-full">
									<img src={feedback.image} alt={feedback.alt} />
								</div>
							</div>
							<div>
								<h6 class="text-lg font-bold">{feedback.name}</h6>
								<p class="text-secondary font-semibold">{feedback.postion}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="join mt-10 grid grid-cols-2 gap-2">
				<button class="join-item btn btn-primary text-white" onclick={prevPage}
					>Previous page</button
				>
				<button class="join-item btn btn-primary text-white" onclick={nextPage}>Next</button>
			</div>
		</div>

		<div
			class="rounded-4xl bg-cover bg-center px-2 text-white"
			style="background-image: url('clientImages/blackbg.jpg');"
		>
			<div class="grid lg:grid-cols-2">
				<div
					class="flex flex-col justify-center gap-10 max-lg:mt-10 max-lg:items-center max-lg:text-center lg:ml-20"
				>
					<p class="text-3xl max-sm:text-center sm:text-4xl font-bold tracking-tighter 2xl:text-6xl">
						Your next adventure starts here <br /> reserve your ride now!
					</p>
					<p class="text-lg font-semibold 2xl:text-2xl">
						Need help? Our friendly customer service team is <br /> just a message away.
					</p>
					<div>
						<button class="btn btn-primary btn-xl text-white">Contact us</button>
					</div>
				</div>
				<div>
					<img src="/clientImages/redcar.webp" alt="redcar" class="h-auto" />
				</div>
			</div>
		</div>
	</div>
</div>
