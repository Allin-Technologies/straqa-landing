const redirects = async () => {
  const internetExplorerRedirect = {
    destination: "/ie-incompatible.html",
    has: [
      {
        type: "header",
        key: "user-agent",
        value: "(.*Trident.*)", // all ie browsers
      },
    ],
    permanent: false,
    source: "/:path((?!ie-incompatible.html$).*)", // all pages except the incompatibility page
  };

  const redirects = [
    internetExplorerRedirect,
    {
      source: "/demo",
      destination: "https://youtu.be/QPx52UNhkRc",
      permanent: true,
    },
    {
      source: "/pitchdeck",
      destination:
        "https://drive.google.com/file/d/1Bu6_ndqZo21-2L9TNNgs5IhnT4dSTWX7/view?usp=drivesdk",
      permanent: true,
    },
  ];

  return redirects;
};

export default redirects;
