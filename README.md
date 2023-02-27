<h1><img alt="Bright light" src="https://i.imgur.com/SsZ36xT.png" /> viJoule</h1>
## Power BI for Salesforce Lightning

[<img src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">](https://githubsfdeploy.herokuapp.com/?owner=dannysummerlin&repo=viJoule&ref=main)

Use this Lightning Component to embed a dynamic Power BI report in Salesforce! You can use [URL Filters](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-url-filters) with up to three filters based on Record details to make the report responsize to the page you are on, provided your licensing supports it.
- If you use a public sharing link, you will not be able to filter, unless you have a high-end license/capacity purchase (that I've never used, so your mileage may vary)
- If you use a private link, on the first page load the reader will have to login to Office 365, and potentially reload the page/click "Sign In" again

In order to use the component:

| ![image](https://user-images.githubusercontent.com/21697508/221445907-92e8f12d-fd70-42c5-a13f-7922dad8f199.png) | 1. First enter the Power BI report sharing link <br/> 2. If you do want to filter, enter your [oData Query](https://learn.microsoft.com/en-us/odata/concepts/queryoptions-overview); use the placeholders field1/field2/field3 for where you would like record values inserted <br/> 3. Enter the [API Name](https://help.salesforce.com/s/articleView?id=000385500&type=1) for the record field(s) you would like to filter on |
|------------------|------------------|
