"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function RecaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaKey) {
    console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined.");
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}

// this is another recaptcha provider - v2  - EASY TO USE

/* reCAPTCHA v2 checkbox handler function - use before the component starts */

// reCAPTCHA refs/state
// const recaptchaRef = useRef<ReCAPTCHA | null>(null);
// const [captchaToken, setCaptchaToken] = useState<string | null>(null);

// const handleCaptchaChange = (value: string | null) => {
//   setCaptchaToken(value);
//   console.log("reCAPTCHA token (onChange):", value);
// };
// const handleCaptchaExpired = () => {
//   setCaptchaToken(null);
//   console.warn("reCAPTCHA expired");
// };
// const handleCaptchaErrored = () => {
//   setCaptchaToken(null);
//   console.error("reCAPTCHA errored");
// };

{
  /* reCAPTCHA v2 checkbox in component */
}
{
  /* <div className="mt-4">
  <ReCAPTCHA
    ref={recaptchaRef}
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    onChange={handleCaptchaChange}
    onExpired={handleCaptchaExpired}
    onErrored={handleCaptchaErrored}
  />
</div>; */
}
