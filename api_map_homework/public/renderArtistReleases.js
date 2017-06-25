var renderArtistReleases = function(releaseData) {

  //SORT RELEASES BY CATEGORY
  var albums = [];
  var EPs = [];
  var singles = [];
  var misc = [];

  for(release of releaseData.album_list) {
    switch (release.album.album_release_type) {
      case "Album":
        albums.push(release);
        break;
      case "Ep":
        EPs.push(release);
        break;
      case "Single":
        singles.push(release);
        break;
      default:
        misc.push(release);
    }
  }

  if(albums.length > 0) {
    renderSection(albums, "Albums:");
  }
  if(EPs.length > 0) {
    renderSection(EPs, "EPs:");
  }
  if(singles.length > 0) {
    renderSection(singles, "Singles:");
  }
  if(misc.length > 0) {
    renderSection(misc, "Miscellaneous Releases:");
  }
}

  var renderSection = function(dataArray, label) {
    var displayArea = document.querySelector("#artist-releases");
    var releaseSection = document.createElement("ul");
    var releaseSectionTitle = document.createElement("h2");
    releaseSectionTitle.innerText = label;
    releaseSection.appendChild(releaseSectionTitle);

    for(release of dataArray) {
      var releaseListItem = document.createElement("li");
      releaseListItem.innerText = release.album.album_name + " (" + release.album.album_release_date + ")";
      releaseSection.appendChild(releaseListItem);
    }

    displayArea.appendChild(releaseSection);

}
