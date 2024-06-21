<script>
  export let Image;
  export let Title;
  export let ArtistPeople;
</script>

<section class="w-[70%] mx-auto mt-3">
  <div>
    <picture>
      <img class="w-[250px] mx-auto rounded-xl" src={Image} alt={Title} />
    </picture>
  </div>
  <div class="w-[80%] mx-auto text-center">
    <h1 class="text-4xl font-bold p-2">{Title}</h1>
    <p class="opacity-50 p-2">{ArtistPeople}</p>
  </div>
</section>
