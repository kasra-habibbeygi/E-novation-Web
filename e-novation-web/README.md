<!-- folder structure -->
<!-- public -->

This part is used for photos and heavy files. It is not loaded into the git.

<!-- sources -->

All code sources are placed here

<!-- APIs -->

All APIs are extracted from the components in a usable form and placed in this folder.
Inside this folder, there is a reference API under the title of bridge, which is used for extracting the similar part of APIs.
APs are placed inside the classes.
If a piece of code is similar in APIs of the same class, they are placed inside --query static function to avoid rewriting and bulking APIs.

<!-- components -->

In this folder all the components are placed separately.the structure of folders depend on structure of components in app. we have to separate main page then two main folder. inside each one we have main components and so on.
The UI folder used for separating most used components that have special design for all over the app. like buttons or headers or cards and.

<!-- constants -->

All of the hardcode parts of code will extract here for having better control on the performance of app. like colors, links, strings and etc.

<!-- helpers -->

functions that haven't any react hook inside on may be used many times in entire app. like calculations, resizes, transformations.

<!-- hooks -->

all of functions that can used as hook or using hooks inside, mostly async functions will placed here. ( we don't need it yet and we haven't )

<!-- store -->

all of state management libraries and functionalities placed here. like redux, context, moboX and etc if used.
