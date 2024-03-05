const regions = {
  scrollRegion: ".Tm.aeJ",
  lastMessageRegion: ".adx",
  replyForwardRegion: `.amn span[role="link"]`,
};

$(document).on("click", regions.replyForwardRegion, function () {
  setTimeout(function () {
    $(regions.scrollRegion).scrollTop(0);
  }, 0);
});

$(document).on("click", regions.lastMessageRegion, function () {
  $("[class*='kv']:not([class*='bg'])").css(
    "border-top",
    "0.5px solid #e9eae0"
  );
});
