import html2canvas from "html2canvas";

export function downloadPosterImage() {
  const posterToCanvas = document.getElementById("poster-to-canvas");
  if (!posterToCanvas) return;

  html2canvas(posterToCanvas, { allowTaint: true }).then(function (canvas) {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "my_opinions_poster.jpg";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
}

export function downloadCoverPicture() {
  const coverPictureDiv = document.getElementById("coverPictureHtmlToCanvas");
  if (!coverPictureDiv) return;

  html2canvas(coverPictureDiv, { allowTaint: true }).then(function (canvas) {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "facebook_cover_picture.png";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
}

export function downloadProfilePicture() {
  const profilePictureDiv = document.getElementById(
    "profilePictureHtmlToCanvas"
  );
  if (!profilePictureDiv) return;

  html2canvas(profilePictureDiv, { allowTaint: true }).then(function (canvas) {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "facebook_profile_picture.jpg";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
}
