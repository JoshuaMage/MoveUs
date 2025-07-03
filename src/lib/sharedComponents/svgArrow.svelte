<script lang="ts">
	import { icons } from '$lib/icons/icons';
  
	type IconName = keyof typeof icons;
  
	const props = $props<{
	  name: IconName;
	  size?: number;
	  color?: string;
	}>();
  
	const name = props.name as IconName;
	const size = props.size ?? 24;
	const color = props.color ?? 'currentColor';
  
	const svg = icons[name];
  </script>
  
  
  {#if svg}
	<div
	  class="icon"
	  style="width: {size}px; height: {size}px; color: {color};"
	>
	  {@html svg}
	</div>
  {:else}
	<span>Icon not found: {name}</span>
  {/if}
  