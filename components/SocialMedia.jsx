import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

export const SocialMediaProfiles = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/99967515/admin/feed/posts/",
    icon: BsLinkedin,
  },
  { title: "GitHub", href: "https://github.com/dealogroup", icon: BsGithub },
  {
    title: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61551119413304",
    icon: BsFacebook,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/dealogroup",
    icon: BsLinkedin,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/deallogroup",
    icon: BsTwitter,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
