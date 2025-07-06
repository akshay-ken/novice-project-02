import fbIcon from "../assets/images/icon-facebook.svg";
import pinIcon from "../assets/images/icon-pinterest.svg";
import instaIcon from "../assets/images/icon-instagram.svg";

export function FooterSection() {
  return (
    <>
      <footer className="flex flex-row justify-center gap-x-6">
        <img src={fbIcon} className="size-10" alt="" />
        <img src={pinIcon} className="size-10" alt="" />
        <img src={instaIcon} className="size-10" alt="" />
      </footer>
    </>
  );
}
