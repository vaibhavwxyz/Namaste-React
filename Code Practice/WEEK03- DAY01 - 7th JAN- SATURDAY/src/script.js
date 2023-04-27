import React from "react";
import ReactDOM from "react-dom/client";

const mealsData = [
  {
    idMeal: "52977",
    strMeal: "Corba",
    strCategory: "Side",
    strArea: "Turkish",
    strInstructions:
      "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
  },
  {
    idMeal: "53065",
    strMeal: "Sushi",
    strCategory: "Seafood",
    strArea: "Japanese",
    strInstructions:
      "STEP 1\r\nTO MAKE SUSHI ROLLS: Pat out some rice. Lay a nori sheet on the mat, shiny-side down. Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear.\r\n\r\nSTEP 2\r\nSpread over some Japanese mayonnaise. Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice.\r\n\r\nSTEP 3\r\nAdd the filling. Get your child to top the mayonnaise with a line of their favourite fillings – here we’ve used tuna and cucumber.\r\n\r\nSTEP 4\r\nRoll it up. Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll.\r\n\r\nSTEP 5\r\nStick down the sides like a stamp. When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll.\r\n\r\nSTEP 6\r\nWrap in cling film. Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film.\r\n\r\nSTEP 7\r\nTO MAKE PRESSED SUSHI: Layer over some smoked salmon. Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film.\r\n\r\nSTEP 8\r\nCover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one.\r\n\r\nSTEP 9\r\nTip it out like a sandcastle. Turn block of sushi onto a chopping board. Get a grown-up to cut into fingers, then remove the cling film.\r\n\r\nSTEP 10\r\nTO MAKE SUSHI BALLS: Choose your topping. Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping.\r\n\r\nSTEP 11\r\nMake into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
  },
  {
    idMeal: "52978",
    strMeal: "Kumpir",
    strCategory: "Side",
    strArea: "Turkish",
    strInstructions:
      "If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There’s then a row of other toppings that you can just point at to your heart’s content – sweetcorn, olives, salami, coleslaw, Russian salad, allsorts – and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer.\r\n\r\nGrate (roughly – you can use as much as you like) 150g of cheese.\r\nFinely chop one onion and one sweet red pepper.\r\nPut these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional).",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
  },
  {
    idMeal: "53026",
    strMeal: "Tamiya",
    strCategory: "Vegetarian",
    strArea: "Egyptian",
    strInstructions:
      "oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.\r\nGrind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.\r\nShape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.\r\nHeat at least 1½-inches of oil over medium heat to 365 degrees.\r\nFry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
  },
  {
    idMeal: "52785",
    strMeal: "Dal fry",
    strCategory: "Vegetarian",
    strArea: "Indian",
    strInstructions:
      "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
  },
  {
    idMeal: "52804",
    strMeal: "Poutine",
    strCategory: "Miscellaneous",
    strArea: "Canadian",
    strInstructions:
      "Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C).\r\nWarm gravy in saucepan or microwave.\r\nPlace the fries into the hot oil, and cook until light brown, about 5 minutes.\r\nRemove to a paper towel lined plate to drain.\r\nPlace the fries on a serving platter, and sprinkle the cheese over them.\r\nLadle gravy over the fries and cheese, and serve immediately.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
  },
  {
    idMeal: "52844",
    strMeal: "Lasagne",
    strCategory: "Pasta",
    strArea: "Italian",
    strInstructions:
      "Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened.\r\nAdd the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over.\r\nStir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins.\r\nHeat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce overlapping to make it fit, then repeat with more sauce and another layer of pasta. Repeat with a further 2 layers of sauce and pasta, finishing with a layer of pasta.\r\nPut the crème fraîche in a bowl and mix with 2 tbsp water to loosen it and make a smooth pourable sauce. Pour this over the top of the pasta, then top with the mozzarella. Sprinkle Parmesan over the top and bake for 25–30 mins until golden and bubbling. Serve scattered with basil, if you like.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
  },
  {
    idMeal: "52929",
    strMeal: "Timbits",
    strCategory: "Dessert",
    strArea: "Canadian",
    strInstructions:
      "Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry. Stir until smooth.\r\nDrop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides.\r\nRemove and drain.\r\nRoll in cinnamon sugar while still warm and serve.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
  },
  {
    idMeal: "52948",
    strMeal: "Wontons",
    strCategory: "Pork",
    strArea: "Chinese",
    strInstructions:
      "Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl.\r\nSeparate wonton skins.\r\nPlace a heaping teaspoon of filling in the center of the wonton.\r\nBrush water on 2 borders of the skin, covering 1/4 inch from the edge.\r\nFold skin over to form a triangle, sealing edges.\r\nPinch the two long outside points together.\r\nHeat oil to 450 degrees and fry 4 to 5 at a time until golden.\r\nDrain and serve with sauce.",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
  },
  {
    idMeal: "52971",
    strMeal: "Kafteji",
    strCategory: "Vegetarian",
    strArea: "Tunisian",
    strInstructions:
      "Peel potatoes and cut into 5cm cubes.\r\nPour 1-2 cm of olive oil into a large pan and heat up very hot. Fry potatoes until golden brown for 20 minutes, turning from time to time. Place on kitchen paper to drain.\r\nCut the peppers in half and remove seeds. Rub a little olive oil on them and place the cut side down on a baking tray. Place them under the grill. Grill until the skin is dark and bubbly. While the peppers are still hot, put them into a plastic sandwich bag and seal it. Take them out after 15 minutes and remove skins.\r\nIn the meantime, heat more olive oil another pan. Peel the onions and cut into thin rings. Fry for 15 minutes until golden brown, turning them often. Add the Ras el hanout at the end.\r\nCut the pumpkin into 5cm cubes and fry in the same pan you used for the potatoes for 10-15 minutes until it is soft and slightly browned. Place on kitchen paper.\r\nPour the remaining olive oil out of the pan and put all the cooked vegetables into the pan and mix. Whisk eggs and pour them over the vegetables. Put the lid on the pan so that the eggs cook. Put the contents of the pan onto a large chopping board, add salt and pepper and chopped and mix everything with a big knife.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg",
  },
  {
    idMeal: "53013",
    strMeal: "Big Mac",
    strCategory: "Beef",
    strArea: "American",
    strInstructions:
      "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.\r\n2. To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each. Place each onto a square of baking paper and flatten to form into four x 15cm circles. Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through. Remove from heat and keep warm. Repeat with remaining two patties.\r\n3. Carefully slice each burger bun into three acrossways, then lightly toast.\r\n4. To assemble the burgers, spread a little Big Mac sauce over the bottom base. Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices. Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce. Top with burger lid to serve.\r\n5. After waiting half an hour for your food to settle, go for a jog.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
  },
  {
    idMeal: "53027",
    strMeal: "Koshari",
    strCategory: "Vegetarian",
    strArea: "Egyptian",
    strInstructions:
      "Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice).\r\nNow, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tbsp cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 1/2 inches (you’ll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes).  Keep covered and undisturbed for 5 minutes or so.\r\nNow make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain.\r\nCover the chickpeas and warm in the microwave briefly before serving.\r\n\r\nMake the crispy onion topping. \r\n\r\nSprinkle the onion rings with salt, then toss them in the flour to coat. Shake off excess flour.\r\nIn a large skillet, heat the cooking oil over medium-high heat, cook the onion rings, stirring often, until they turn a nice caramelized brown. Onions must be crispy, but not burned (15-20 minutes).",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg",
  },
  {
    idMeal: "52769",
    strMeal: "Kapsalon",
    strCategory: "Lamb",
    strArea: "Dutch",
    strInstructions:
      "Cut the meat into strips. Heat oil in a pan and fry the strips for 6 minutes until it's ready.\r\nBake the fries until golden brown in a deep fryrer. When ready transfer to a backing dish. Make sure the fries are spread over the whole dish.\r\nCover the fries with a new layer of meat and spread evenly.\r\nAdd a layer of cheese over the meat. You can also use grated cheese. When done put in the oven for a few minutes until the cheese is melted.\r\nChop the lettuce, tomato and cucumber in small pieces and mix together. for a basic salad. As extra you can add olives jalapenos and a red union.\r\nDived the salad over the dish and Serve with garlicsauce and hot sauce",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
  },
  {
    idMeal: "52802",
    strMeal: "Fish pie",
    strCategory: "Seafood",
    strArea: "British",
    strInstructions:
      "01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones.\r\n03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream.\r\n04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon.\r\n05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
  },
  {
    idMeal: "52854",
    strMeal: "Pancakes",
    strCategory: "Dessert",
    strArea: "American",
    strInstructions:
      "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away.\r\nSet a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.\r\nServe with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
  },
  {
    idMeal: "52887",
    strMeal: "Kedgeree",
    strCategory: "Seafood",
    strArea: "British",
    strInstructions:
      "For the rice, heat the oil in a large, lidded pan, add the onion, then gently fry for 5 mins until softened but not coloured. Add the spices, season with salt, then continue to fry until the mix start to go brown and fragrant; about 3 mins.\r\nAdd the rice and stir in well. Add 600ml water, stir, then bring to the boil. Reduce to a simmer, then cover for 10 mins. Take off the heat and leave to stand, covered, for 10-15 mins more. The rice will be perfectly cooked if you do not lift the lid before the end of the cooking.\r\nMeanwhile, put the haddock and bay leaves in a frying pan, cover with the milk, then poach for 10 mins until the flesh flakes. Remove from the milk, peel away the skin, then flake the flesh into thumbsize pieces. Place the eggs in a pan, cover with water, bring to the boil, then reduce to a simmer. Leave for 4½-5 mins, plunge into cold water, then peel and cut the eggs into quarters. Gently mix the fish, eggs, parsley, coriander and rice together in the pan. Serve hot, sprinkled with a few extra herbs.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
  },
  {
    idMeal: "52906",
    strMeal: "Flamiche",
    strCategory: "Vegetarian",
    strArea: "French",
    strInstructions:
      "For the pastry, sift the flour and salt into the bowl of a food processor, add the butter and lard, then whizz together briefly until the mixture looks like fine breadcrumbs. Tip the mixture into a bowl, then stir in the cheese and enough of the water for the mixture to come together. Tip out onto a lightly floured surface and knead briefly until smooth. Roll out thinly and line a 23cm x 4cm loose-?bottomed fluted flan tin. Prick the base with a fork. Chill for 20 minutes.\r\n02.Melt the 75g butter in a saucepan over a low heat, then add the leeks and the salt. Cover and cook for ?10 minutes until soft. Uncover the pan, increase the heat and cook ?for 2 minutes, stirring occasionally, until the liquid has evaporated. Spoon onto a plate and leave to cool.\r\n03.Preheat the oven to 200°C/fan180°C/gas 6. Line the pastry case with baking paper and baking beans or rice and blind bake for 15-20 minutes until the edges are biscuit-coloured. Remove the paper and beans/rice and return the case to the oven for 7-10 minutes until the base is crisp and lightly golden. Remove and set aside. Reduce the oven temperature to 190°C/fan170°C/gas 5.\r\n04.Put the crème fraîche into a bowl with the whole egg, egg yolks and nutmeg. Lightly beat together, then season. Stir in the leeks. Spoon ?the mixture into the tart case and bake for 35-40 minutes until set ?and lightly golden. Remove from ?the oven and leave for 10 minutes. Take out of the tin and serve.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
  },
  {
    idMeal: "52980",
    strMeal: "Stamppot",
    strCategory: "Pork",
    strArea: "Dutch",
    strInstructions:
      "\r\nWash and peel the potatoes and cut into similarly sized pieces for even cooking.\r\n\r\nIn a large soup pot, boil the potatoes and the bay leaves in salted water for 20 minutes. Discard the bay leaves.\r\n\r\nIf you're not using a bag of ready-cut curly kale, wash the bunches thoroughly under cool running water to get rid of all soil—you wouldn't want that gritty texture in your finished dish. Trim any coarse stems and discard any brown leaves. With a sharp knife, cut the curly kale into thin strips.\r\n\r\nPeel and chop the shallots.\r\n\r\nIn a frying pan or skillet, melt 1 tbsp. of butter and saute the shallots for a few minutes before adding the curly kale and 2 tbsp. of water. Season and cook for about 10 minutes, or until tender.\r\n\r\nWarm the milk on the stove or in the microwave.\r\n\r\nDrain, shake and dry the potatoes with kitchen towels before mashing with a potato masher or ricer. Working quickly, add the warm milk and the remaining butter. Season to taste with nutmeg, salt, and pepper. \r\n\r\nMix the cooked curly kale through the cooked mashed potato mixture.\r\n\r\nTop with slices of the smoked sausage and serve hot with your favorite mustard or gravy.\r\n\r\nServe and enjoy!",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/hyarod1565090529.jpg",
  },
  {
    idMeal: "53006",
    strMeal: "Moussaka",
    strCategory: "Beef",
    strArea: "Greek",
    strInstructions:
      "Heat the grill to high. Brown the beef in a deep ovenproof frying pan over a high heat for 5 mins. Meanwhile, prick the aubergine with a fork, then microwave on High for 3-5 mins until soft. Mix the yogurt, egg and parmesan together, then add a little seasoning.\r\n\r\nStir the tomatoes, purée and potatoes in with the beef with some seasoning and heat through. Smooth the surface of the beef mixture with the back of a spoon, then slice the cooked aubergine and arrange on top. Pour the yogurt mixture over the aubergines, smooth out evenly, then grill until the topping has set and turned golden.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
  },
  {
    idMeal: "53028",
    strMeal: "Shawarma",
    strCategory: "Chicken",
    strArea: "Egyptian",
    strInstructions:
      "Combine the marinade ingredients in a large ziplock bag (or bowl).\r\nAdd the chicken and use your hands to make sure each piece is coated. If using a ziplock bag, I find it convenient to close the bag then massage the bag to disperse the rub all over each chicken piece.\r\nMarinate overnight or up to 24 hours.\r\nCombine the Yoghurt Sauce ingredients in a bowl and mix. Cover and put in the fridge until required (it will last for 3 days in the fridge).\r\nHeat grill/BBQ (or large heavy based pan on stove) on medium high. You should not need to oil it because the marinade has oil in it and also thigh fillets have fat. But if you are worried then oil your hotplate/grill. (See notes for baking)\r\nPlace chicken on the grill and cook the first side for 4 to 5 minutes until nicely charred, then turn and cook the other side for 3 to 4 minutes (the 2nd side takes less time).\r\nRemove chicken from the grill and cover loosely with foil. Set aside to rest for 5 minutes.\r\nTO SERVE\r\nSlice chicken and pile onto platter alongside flatbreads, Salad and the Yoghurt Sauce.\r\nTo make a wrap, get a piece of flatbread and smear with Yoghurt Sauce. Top with a bit of lettuce and tomato and Chicken Shawarma. Roll up and enjoy!",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg",
  },
  {
    idMeal: "52791",
    strMeal: "Eton Mess",
    strCategory: "Dessert",
    strArea: "British",
    strInstructions:
      "Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration.\r\nWhip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using.\r\nSpoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
  },
  {
    idMeal: "52811",
    strMeal: "Ribollita",
    strCategory: "Vegetarian",
    strArea: "Italian",
    strInstructions:
      "Put 2 tablespoons of the oil in a large pot over medium heat. When it’s hot, add onion, carrot, celery and garlic; sprinkle with salt and pepper and cook, stirring occasionally, until vegetables are soft, 5 to 10 minutes.\r\nHeat the oven to 500 degrees. Drain the beans; if they’re canned, rinse them as well. Add them to the pot along with tomatoes and their juices and stock, rosemary and thyme. Bring to a boil, then reduce heat so the soup bubbles steadily; cover and cook, stirring once or twice to break up the tomatoes, until the flavors meld, 15 to 20 minutes.\r\nFish out and discard rosemary and thyme stems, if you like, and stir in kale. Taste and adjust seasoning. Lay bread slices on top of the stew so they cover the top and overlap as little as possible. Scatter red onion slices over the top, drizzle with the remaining 3 tablespoons oil and sprinkle with Parmesan.\r\nPut the pot in the oven and bake until the bread, onions and cheese are browned and crisp, 10 to 15 minutes. (If your pot fits under the broiler, you can also brown the top there.) Divide the soup and bread among 4 bowls and serve.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/xrrwpx1487347049.jpg",
  },
  {
    idMeal: "52871",
    strMeal: "Yaki Udon",
    strCategory: "Vegetarian",
    strArea: "Japanese",
    strInstructions:
      "Boil some water in a large saucepan. Add 250ml cold water and the udon noodles. (As they are so thick, adding cold water helps them to cook a little bit slower so the middle cooks through). If using frozen or fresh noodles, cook for 2 mins or until al dente; dried will take longer, about 5-6 mins. Drain and leave in the colander.\r\nHeat 1 tbsp of the oil, add the onion and cabbage and sauté for 5 mins until softened. Add the mushrooms and some spring onions, and sauté for 1 more min. Pour in the remaining sesame oil and the noodles. If using cold noodles, let them heat through before adding the ingredients for the sauce – otherwise tip in straight away and keep stir-frying until sticky and piping hot. Sprinkle with the remaining spring onions.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/wrustq1511475474.jpg",
  },
  {
    idMeal: "52926",
    strMeal: "Tourtiere",
    strCategory: "Pork",
    strArea: "Canadian",
    strInstructions:
      "Heat oven to 200C/180C fan/gas 6. Boil the potato until tender, drain and mash, then leave to cool. Heat the oil in a non-stick pan, add the mince and onion and quickly fry until browned. Add the garlic, spices, stock, plenty of pepper and a little salt and mix well. Remove from the heat, stir into the potato and leave to cool.\r\nRoll out half the pastry and line the base of a 20-23cm pie plate or flan tin. Fill with the pork mixture and brush the edges of the pastry with water. Roll out the remaining dough and cover the pie. Press the edges of the pastry to seal, trimming off the excess. Prick the top of the pastry case to allow steam to escape and glaze the top with the beaten egg.\r\nBake for 30 mins until the pastry is crisp and golden. Serve cut into wedges with a crisp green salad. Leftovers are good cold for lunch the next day, served with a selection of pickles.",
    strMealThumb:
      "https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg",
  },
];

const Nav = () => {
  return (
    <nav className="flex items-center justify-between max-w-6xl mx-auto py-5">
      <img
        src="https://user-images.githubusercontent.com/73052214/234671439-155f12ea-4095-4264-a83c-5bed32e28ab9.svg"
        alt="logo"
      />
      <ul className="flex gap-5">
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          Home
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          Menu
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          About us
        </li>
        <li className="md:hover:cursor-pointer md:hover:text-[#F4694C] font-semibold">
          Contact us
        </li>
      </ul>
      <button className="bg-[#F4694C] px-5 py-2 rounded-full text-white font-semibold text-center md:hover:bg-[#e14221]">
        Login
      </button>
    </nav>
  );
};
// we can also use object destructuring
const Cards = ({ cardData }) => {
  const { strMealThumb, strMeal, strArea } = cardData;
  return (
    <div className=" shadow-lg rounded-md p-2">
      <img className="rounded-xl" src={strMealThumb} alt="img" />
      <h3>{strMeal}</h3>
      <h3>{strArea}</h3>
    </div>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="max-w-6xl mx-auto grid gap-5 grid-cols-4 grid-rows-3">
        {mealsData.map((e) => {
          return <Cards cardData={e} key={e.idMeal} />;
        })}
        {/* 
        <Cards cardData={mealsData[1]} />
        <Cards cardData={mealsData[2]} />
        <Cards cardData={mealsData[3]} />
        <Cards cardData={mealsData[4]} />
        <Cards cardData={mealsData[5]} />
        <Cards cardData={mealsData[6]} />
        <Cards cardData={mealsData[7]} />
        <Cards cardData={mealsData[8]} />
        <Cards cardData={mealsData[9]} />
        <Cards cardData={mealsData[10]} />
        <Cards cardData={mealsData[11]} /> */}
      </div>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
