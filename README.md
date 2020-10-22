# dashboard

This was a small test project to get a starting point on the use of Vue. It was created with Vue 2, I would like to start another project to crack open the new Vue 3 and to get more into the use of state management (composition api). 

This project is the frontend to another project/api (expressjs web scraping api project and db that scrapes data for weather, news, groceries and reddit posts). This Vue frontend displays the data in either a tiling dashboard (desktop) or tinder style tile swipe view (mobile). 



![Collatenator on desktop](https://github.com/kmsherrin/readme_pictures/blob/main/collatenator_2560.png?raw=true=750x)

The Collatenator main dashboard UI on desktop with a horizontal resolution of 2560px 

![Collatenator on mobile](https://github.com/kmsherrin/readme_pictures/blob/main/collatenator_mobile.png?raw=true)\

When on mobile the cards in the desktop view squish down and are accessible swiping along the horizontal axis, cards will snap into view so that the user can "flick" through the cards.   

#### List of features 
- Easily extensible tile system (provide a keyword prop to pass to the backend api and it will display the accordingly)
- Minimal dependencies 
- Attempts to format and display most reddit posts
- Displays news posts in readable format
- All items are full linked to open at source
- Functional weather display


Not a very complete project, but got started with Vue nonetheless


todo
- add login system with page to add/remove desired tiles
