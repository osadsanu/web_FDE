const mobileToggle = document.querySelector("#mobile-nav-toggle");
const mobileNav = document.querySelector("#mobile-nav");

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    mobileToggle.setAttribute("aria-expanded", String(isOpen));

    const menuIcon = mobileToggle.querySelector('[data-icon="menu"]');
    const closeIcon = mobileToggle.querySelector('[data-icon="close"]');

    if (menuIcon && closeIcon) {
      menuIcon.classList.toggle("hidden", isOpen);
      closeIcon.classList.toggle("hidden", !isOpen);
    }
  });
}

document.querySelectorAll("[data-desktop-submenu]").forEach((submenu) => {
  const toggle = submenu.querySelector("[data-desktop-submenu-toggle]");

  if (!toggle) {
    return;
  }

  const openMenu = () => {
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      return;
    }

    submenu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    submenu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  submenu.addEventListener("mouseenter", openMenu);
  submenu.addEventListener("mouseleave", closeMenu);
  submenu.addEventListener("focusin", openMenu);
  submenu.addEventListener("focusout", (event) => {
    if (!submenu.contains(event.relatedTarget)) {
      closeMenu();
    }
  });
});

document.querySelectorAll("[data-mobile-submenu]").forEach((submenu) => {
  const button = submenu.querySelector("[data-mobile-submenu-toggle]");
  const panel = submenu.querySelector("[data-mobile-submenu-panel]");

  if (!button || !panel) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = submenu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const heroSlider = document.querySelector("[data-hero-slider]");

if (heroSlider) {
  const slides = Array.from(heroSlider.querySelectorAll("[data-hero-slide]"));
  const dots = Array.from(heroSlider.querySelectorAll("[data-hero-dot]"));
  const prevButton = heroSlider.querySelector("[data-hero-prev]");
  const nextButton = heroSlider.querySelector("[data-hero-next]");

  if (slides.length > 1) {
    let activeIndex = Math.max(
      0,
      slides.findIndex((slide) => slide.classList.contains("is-active"))
    );
    let intervalId;

    const render = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });

      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;

        dot.classList.toggle("is-active", isActive);
        dot.classList.toggle("bg-white", isActive);
        dot.classList.toggle("bg-white/50", !isActive);
        dot.classList.toggle("h-2", true);
        dot.classList.toggle("sm:h-3", true);
        dot.classList.toggle("w-8", isActive);
        dot.classList.toggle("sm:w-10", isActive);
        dot.classList.toggle("w-2", !isActive);
        dot.classList.toggle("sm:w-3", !isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    const startAutoplay = () => {
      window.clearInterval(intervalId);
      intervalId = window.setInterval(() => {
        activeIndex = (activeIndex + 1) % slides.length;
        render();
      }, 4500);
    };

    const goTo = (index) => {
      activeIndex = (index + slides.length) % slides.length;
      render();
      startAutoplay();
    };

    prevButton?.addEventListener("click", () => {
      goTo(activeIndex - 1);
    });

    nextButton?.addEventListener("click", () => {
      goTo(activeIndex + 1);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        goTo(index);
      });
    });

    render();
    startAutoplay();
  }
}

const allyScroll = document.querySelector("[data-ally-scroll]");

if (allyScroll && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.setInterval(() => {
    allyScroll.scrollLeft += 0.5;

    if (allyScroll.scrollLeft >= allyScroll.scrollWidth / 2) {
      allyScroll.scrollLeft = 0;
    }
  }, 20);
}

const blogSearchInput = document.querySelector("[data-blog-search-input]");

if (blogSearchInput) {
  const cards = Array.from(document.querySelectorAll("[data-blog-card]"));
  const emptyState = document.querySelector("[data-blog-empty]");

  const filterCards = () => {
    const query = blogSearchInput.value.trim().toLowerCase();
    let visibleCards = 0;

    cards.forEach((card) => {
      const haystack = card.dataset.searchContent || "";
      const matches = !query || haystack.includes(query);

      card.classList.toggle("hidden", !matches);

      if (matches) {
        visibleCards += 1;
      }
    });

    if (emptyState) {
      emptyState.classList.toggle("hidden", visibleCards !== 0);
    }
  };

  blogSearchInput.addEventListener("input", filterCards);
  filterCards();
}
