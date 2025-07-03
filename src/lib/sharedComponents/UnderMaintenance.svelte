<script lang="ts">
  import { goto } from '$app/navigation';

  // @ts-ignore
  import MdSettings from 'svelte-icons/md/MdSettings.svelte';
</script>

<div class="h-screen w-screen flex justify-center items-center">
  <div class="flex flex-col items-center gap-2 p-4 text-center">
    <div class="h-32 w-32 animate-spin mb-2">
      <MdSettings />
    </div>

    <div class="text-3xl font-bold pb-2">Maintenance Mode</div>
    <div class="text-xl opacity-70 border-b pb-2 border-primary">This page is under maintenance</div>
    <div class="pt-4 text-center max-w-[600px]">Please come back later. For concerns and inquiries, please contact our IT administrator.</div>
    <button class="btn" onclick={() => goto('/')}>Back to Home</button>
  </div>
</div>
