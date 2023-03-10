import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink, FaListUl } from "react-icons/fa";
import { LinkProject } from "../../pages/projects";
import { limitSizeOfString } from "../../utils";

interface CardProps {
  image: string;
  title: string;
  description: string;
  techs: string;
  links: LinkProject;
}

const CardProject: React.FC<CardProps> = ({
  image,
  title,
  description,
  techs,
  links,
}: CardProps) => {
  return (
    <>
      <section className="flex flex-col justify-between rounded bg-light-color dark:bg-secondary overflow-hidden shadow-lg hover:scale-105 hover:cursor-pointer transition duration-300">
        <Image
          className="w-full"
          width="100"
          height="70"
          src={image}
          alt="Project photo"
        />

        <section className="flex flex-col items-center">
          <section className="font-bold text-2xl p-2">{title}</section>
          <section className="w-36 border-t border-primary"></section>
          <p className="max-w-sm text-center text-base p-4">
            {limitSizeOfString(description, 140)}
          </p>
          <section className="w-36 border-t border-primary"></section>
          <section className="p-2 text-base">{techs}</section>
        </section>

        <section className="flex justify-center space-x-4 nowrap text-sm font-semibold bg-light-color dark:bg-main-color p-2">
          {links.detail ? (
            <Link
              href={links.detail}
              className="flex justify-center items-center space-x-1 hover:text-primary"
            >
              <FaListUl />
              <p>View detail</p>
            </Link>
          ) : (
            ""
          )}
          {links.preview ? (
            <Link
              href={links.preview}
              className="flex justify-center items-center space-x-1 hover:text-primary"
            >
              <FaLink />
              <p>Link preview</p>
            </Link>
          ) : (
            ""
          )}
          {links.repository ? (
            <Link
              href={links.repository}
              className="flex justify-center items-center space-x-1 hover:text-primary"
            >
              <FaGithub />
              <p>Repository</p>
            </Link>
          ) : (
            ""
          )}
        </section>
      </section>
    </>
  );
};

export default CardProject;
