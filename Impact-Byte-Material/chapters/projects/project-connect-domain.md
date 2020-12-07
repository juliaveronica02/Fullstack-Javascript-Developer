# Project Connect Domain

- Make sure you already have a website running, such as in Netlify (`https://yourname.netlify.com`)
- Make sure you already have a domain (`yourname.com`)
- Go to domain management panel
  - Remember, each registrar is different
  - In Uniregistry, it's at <https://uniregistry.com/account/manage>
- Pick the `NS / DNS Records` section
  - NS: Name Servers
  - DNS: Domain Name Servers
- Set the `DNS Records` as so
  - `CNAME`: `@` as `yourname.netlify.com`
  - `CNAME`: `www` as `yourname.netlify.com`
- Go to the web hosting management panel
  - In Netlify, it's at <https://app.netlify.com/sites/username/settings/domain>
- Add `Custom Domain`
- Verify the domain
- Wait for a few minutes or hours in order for the changes to take effect
  - It can be up to 24 hours because we need to wait until the DNS is propragated around the world

![](images/domain-uniregistry-dns.png)

![](images/domain-netlify-custom-domain.png)

![](images/domain-netlify-custom-domain-verify.png)
