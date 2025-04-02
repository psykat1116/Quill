const config = {
    providers: [
      {
        domain: process.env.JWT_ISSUER_URL,
        applicationID: "convex",
      },
    ]
  };

export default config;