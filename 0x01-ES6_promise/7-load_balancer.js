export default function loadBalancer(chinaDownload, USDownload) {
  const chinaDownloadPromise = chinaDownload;
  const USDownloadPromise = USDownload;
  return Promise.race([chinaDownloadPromise, USDownloadPromise]).then(
    (value) => value
  );
}
