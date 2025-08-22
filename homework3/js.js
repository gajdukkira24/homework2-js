const pictures = document.querySelectorAll(".feed__item img")
  const options = {
    rootMargin: "150px"
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.lazy;
        entry.target.classList.add("appear");
        observer.unobserve(entry.target); 
      }
    });
  };

  const io = new IntersectionObserver(onEntry, options);

  document.querySelectorAll("img[data-lazy]").forEach(img => io.observe(img));

