import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import { UserContext } from "@/contexts/userContext";
import { CartContext } from "@/contexts/cartContext";

// Mock Directory Data
const mockCategories = [
  { id: 1, title: "Hats", imageUrl: "/hats.png", route: "/shop/hats" },
  { id: 2, title: "Jackets", imageUrl: "/jackets.png", route: "/shop/jackets" },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "/sneakers.png",
    route: "/shop/sneakers",
  },
];

describe("Home Page", () => {
  test("renders the Navbar", () => {
    render(<Home />);
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    // Additional checks, e.g., for specific links in the navbar
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
