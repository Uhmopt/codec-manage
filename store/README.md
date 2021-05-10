akWebsite Store feature : code a cart page on akWebsite, study FastSpring alternative, automate calls to the FastSpring alternative, send licenses automatically to users who bought the plugins, find a way to have a database about customers so that we can resend them the license etc.
Place for UI and whole project specification for now : store subfolder inside https://gitlab.com/Autokroma/akWebsite
Sub projects : create templated emails for sending licenses to clients

akWebsiteStore is the front end for the akStore that can be turned on or off (currently what we have : redirection to FastSpring)

akStore will be the repo (maybe a submodule of akWebsite) with the dynamic code running on our servers or cloud ? What do you think ?


# Current FastSpring store pipeline :

Customers goes on website-> clicks purchase
->is on a fastspring store page (different for each plugin)
-> can change language and country on top (changes currency ?), adds products to cart, can enter VAT ID, has to enter email, says yes or no to newsletter, enter company details if necessary
->sees final price VAT included, can choose payment system
->pays
->payment successful
->confirmation page with licenses

- later on email is sent with licenses

## Issues arising :

Customer wants license again email->contact us->we need to do this manually

Customers wants to change company details to get new invoice or add VAT id afterhands->contact us->redirect them to fastspring

Customers entered wrong email->contact us and we spend lot of time finding right transaction

Payment not working->customer doesnt know why... And isn't redirected to an alternative reseller (aescripts)

Customer not sure how to copy paste license and where to download plugins (need a better email)

Customer did not test free trial (should put a warning checkbox)

# Idea and new "customer pipeline"

Replace fastspring with paddle
Do our own email templating, with a pdf invoice automatically attached and a link online to copy paste the license, with a design close to akWebsite

it would look like that :

# Customer confirmation license + email

so some new todo :
confirmation page once product are boughts with licenses + automatic email sent to users with licenses after confirmation of payment

To see what's currently going on to take inspiration, please go to https://autokroma.test.onfastspring.com/aftercodecs
and you can buy product with
Card Number
4242 4242 4242 4242
Cvv code
\*9KYZ
Expiration date
Any Date in Future

You need to enter your email so that you can receive the email with the license (edited)
Now, the design of those two pages should look alike and be inspired also by the store page
(which was also derived from the website)
Moreover as you already know we should use <table> for emails it's safer
Moreover one constraint I am adding is you shouldn't use any tool that doesn't use brackets and relies on spaces / tabs width to have indentation or blocks
for example the PUG emails you wrote in akCrawler I don't want them for this project. I don't like python-style indentation I want an opening char and a closing char for blocks of code
for example { }
Moreover, I don't see the point of using any html processor at all. I think you should simply use nodejs as I described to you in akCrawler
you can write "cycles" in nodejs very easily with for loops, and iterate in your data and add markup strings on the html string
there is nothing wrong with that, nothing dirty and you will have all the features you need and the code will be understandable by anyone
you can of course use function to make the code more readable (like a function to write a product in the email and then call that function as many times as there are products licenses to write etc.)

## Antoine D 2:20 PM

if that's finished then you can work on a currency dropdown on the store
