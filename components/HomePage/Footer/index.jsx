import Copyright from "../../Common/Copyright";
import SocialList from "../../Common/SocialList";

function Footer() {
  return (
    <footer className="flex flex-col items-center pt-10 pb-5 bg-background">
      <hr className="w-1/2 max-w-6xl mb-5" />
      <SocialList />
      <div className="my-2 text-center">
        <p className="font-bold">Inquiries:</p>
        {/* <a className="text-lg" href="mailto:team@nubloom.space">
          team@nubloom.space
  </a> */}
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
