/*import { GetServerSideProps } from "next";

interface HomeProps {
  windowWidth: number;
  windowHeight: number;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  let windowWidth = 0;
  let windowHeight = 0;

  if (typeof window !== "undefined") {
    // Calculate window width and height on the client side
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  } else {
    // Calculate window width and height on the server side (example values)
    windowWidth = 1200; // Replace with your server-side logic
    windowHeight = 800; // Replace with your server-side logic
  }

  return {
    props: {
      windowWidth,
      windowHeight,
    },
  };
};*/