<script>
  import CardItems from "./card/CardItems";

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let gretting = "";

  if (currentHour <= 12) {
    gretting = "Buenos días.";
  } else if (currentHour <= 18) {
    gretting = "Buenas tardes.";
  } else {
    gretting = "Buenas noches.";
  }
</script>

<article
  class="w-full h-[120px] bg-gradient-to-b from-green-500 to-transparent"
>
  <h1 class="p-2 text-4xl font-bold">
    {gretting}
  </h1>
</article>
