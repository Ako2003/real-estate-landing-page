import Image from "next/image";
import Link from "next/link";

type SocialMediaProps = {
    socialMedia: string[];
}

export default function SocialMedia({ socialMedia = [] }: SocialMediaProps) {
    return(
        <div className="flex items-center gap-x-5 max-lg:hidden">
            {socialMedia.includes("instagram") &&
                <Link href="https://instagram.com">
                    <Image src="/svg/instagram.svg" alt="Instagram Icon" width={30} height={30} />
                </Link>
            }
            {socialMedia.includes("youtube") &&
                <Link href="https://youtube.com">
                    <Image src="/svg/youtube.svg" alt="YouTube Icon" width={30} height={30} />
                </Link>

            }
            {socialMedia.includes("facebook") &&
                <Link href="https://facebook.com">
                    <Image src="/svg/facebook.svg" alt="Facebook Icon" width={30} height={30}/>
                </Link>
            }
        </div>
    )
}