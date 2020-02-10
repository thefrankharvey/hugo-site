function handleNav() {
    const width = window.innerWidth;
    if (width > 768) {
      expandNav();
    }
  }

  function expandNav() {
    document.getElementById("sidenav-js").style.width = "140px";
    document.getElementById("main").style.marginLeft = "140px";
  }

  function closeNav() {
    const main = document.getElementById("main");
    document.getElementById("sidenav-js").style.width = "0";
    main.style.marginLeft = "0";
    main.style.width = "width: calc(100% - 90px);";
  }
  