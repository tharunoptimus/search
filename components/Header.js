import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();

		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<header className="bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					height={40}
					width={120}
					onClick={() => router.push("/")}
					className="cursor-pointer"
				/>
				<form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
					<input
						ref={searchInputRef}
						className="flex-grow w-full focus:outline-none"
						type="text"
					/>
					<XIcon
						className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 mr-2"
						onClick={() => (searchInputRef.current.value = "")}
					/>
					<MicrophoneIcon onClick={search} className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
					<SearchIcon onClick={search} className="h-6 hidden sm:inline-flex text-blue-500 border-gray-300" />
					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>
                <Avatar className="ml-auto" url="https://ih1.redbubble.net/image.1589716958.2882/flat,128x128,075,t.jpg" />
			</div>
            <HeaderOptions />
		</header>
	);
}

export default Header;
