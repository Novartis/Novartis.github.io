<style>
  footer {
    display: flex;
    flex-flow: row nowrap;
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    align-items: center;
    border-top: 1px solid #eee;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: white;
  }
  @media screen and (max-width: 499px) {
    footer {
      text-align: center;
      flex-flow: column nowrap;
    }
  }
  .footer-left {
    flex-grow: 1;
  }
  .footer-right {
    flex-grow: 0;
  }
  a {
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .social {
    font-size: 0.825rem;
  }
  .social a {
    border: 1px solid black;
    background-color: white;
    color: black;
    transition: color 200ms, background-color 200ms;
    
    width: 1.5rem;
    height: 1.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin: 0 0.125rem;
  }
  .social a:hover {
    background-color: black;
    color: white;
  }
  .sep::before {
    content: '|';
  }
</style>
<footer>
  <div class="footer-left">
    &copy; {new Date().getUTCFullYear()} <a href="https://www.novartis.com" target="_blank" rel="nofollow noreferrer">Novartis AG</a>
    <span class="sep" />
    <a href="https://www.novartis.com/terms-use" target="_blank" rel="nofollow noreferrer">
      Terms of use
    </a>
    <span class="sep" />
    <a href="https://www.novartis.com/privacy-policy" target="_blank" rel="nofollow noreferrer">
      Privacy policy
    </a>
    <span class="sep" />
    <a href="mailto:open.source@novartis.com">
      open.source@novartis.com
    </a>
  </div>
  <div class="footer-right social">
    <a title="GitHub" href="https://www.github.com/Novartis" target="_blank" rel="nofollow noreferrer">
      <i class="fab fa-github"></i>
    </a>
    <a title="Facebook" href="https://www.facebook.com/novartis" target="_blank" rel="nofollow noreferrer">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a title="Twitter" href="https://twitter.com/NovartisScience" target="_blank" rel="nofollow noreferrer">
      <i class="fab fa-twitter"></i>
    </a>
    <a title="LinkedIn" href="https://www.linkedin.com/company/novartis-institutes-for-biomedical-research" target="_blank" rel="nofollow noreferrer">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>
</footer>