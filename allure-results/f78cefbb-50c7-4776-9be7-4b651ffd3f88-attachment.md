# Test info

- Name: Upload Files Test
- Location: C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\29_UploadFile.spec.js:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('#multipleFilesStatus')
Expected string: "index2.html"
Received string: "Multiple files selected: index.html, Size: 0 bytes, Type: text/html "
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('#multipleFilesStatus')
    9 × locator resolved to <p id="multipleFilesStatus">…</p>
      - unexpected value "Multiple files selected: index.html, Size: 0 bytes, Type: text/html "

    at C:\Users\ashwin.murugan\playwrite -training\playwrightdemo\tests\PracticeTestCases\29_UploadFile.spec.js:23:54
```

# Page snapshot

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/p/udemy-courses.html
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "GUI Elements" [level=3]:
  - link "GUI Elements":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name"
- text: "Email:"
- textbox "Enter EMail"
- text: "Phone:"
- textbox "Enter Phone"
- text: "Address:"
- textbox "Address:"
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox
- text: to
- textbox
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph: "Single file selected: index.html, Size: 0 bytes, Type: text/html"
- button "Choose File"
- button "Upload Multiple Files"
- paragraph: "Multiple files selected: index.html, Size: 0 bytes, Type: text/html"
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - cell "BookName"
      - cell "Author"
      - cell "Subject"
      - cell "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name Disk (MB/s) CPU (%) Memory (MB) Network (Mbps)":
      - cell "Name"
      - cell "Disk (MB/s)"
      - cell "CPU (%)"
      - cell "Memory (MB)"
      - cell "Network (Mbps)"
  - rowgroup:
    - row "Chrome 0.23 MB/s 9.4% 75.5 MB 6.7 Mbps":
      - cell "Chrome"
      - cell "0.23 MB/s"
      - cell "9.4%"
      - cell "75.5 MB"
      - cell "6.7 Mbps"
    - row "Internet Explorer 0.74 MB/s 3.7% 65.3 MB 3.9 Mbps":
      - cell "Internet Explorer"
      - cell "0.74 MB/s"
      - cell "3.7%"
      - cell "65.3 MB"
      - cell "3.9 Mbps"
    - row "System 0.10 MB/s 7.3% 81.6 MB 4.2 Mbps":
      - cell "System"
      - cell "0.10 MB/s"
      - cell "7.3%"
      - cell "81.6 MB"
      - cell "4.2 Mbps"
    - row "Firefox 0.73 MB/s 3.1% 90.2 MB 5.0 Mbps":
      - cell "Firefox"
      - cell "0.73 MB/s"
      - cell "3.1%"
      - cell "90.2 MB"
      - cell "5.0 Mbps"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 9.4%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 90.2 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 6.7 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.73 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - cell "ID"
      - cell "Name"
      - cell "Price"
      - cell "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - cell
        - cell
    - rowgroup:
      - row "0 82":
        - cell "0"
        - cell "82"
      - row "1 74":
        - cell "1"
        - cell "74"
      - row "2 71":
        - cell "2"
        - cell "71"
      - row "3 71":
        - cell "3"
        - cell "71"
      - row "4 45":
        - cell "4"
        - cell "45"
      - row "5 40":
        - cell "5"
        - cell "40"
      - row "6 82":
        - cell "6"
        - cell "82"
      - row "7 83":
        - cell "7"
        - cell "83"
      - row "8 66":
        - cell "8"
        - cell "66"
      - row "9 65":
        - cell "9"
        - cell "65"
      - row "10 84":
        - cell "10"
        - cell "84"
      - row "11 63":
        - cell "11"
        - cell "63"
      - row "12 55":
        - cell "12"
        - cell "55"
      - row "13 91":
        - cell "13"
        - cell "91"
      - row "14 100":
        - cell "14"
        - cell "100"
      - row "15 87":
        - cell "15"
        - cell "87"
      - row "16 83":
        - cell "16"
        - cell "83"
      - row "17 82":
        - cell "17"
        - cell "82"
      - row "18 65":
        - cell "18"
        - cell "65"
      - row "19 67":
        - cell "19"
        - cell "67"
      - row "20 96":
        - cell "20"
        - cell "96"
      - row "21 83":
        - cell "21"
        - cell "83"
      - row "22 88":
        - cell "22"
        - cell "88"
      - row "23 86":
        - cell "23"
        - cell "86"
      - row "24 80":
        - cell "24"
        - cell "80"
      - row "25 62":
        - cell "25"
        - cell "62"
      - row "26 59":
        - cell "26"
        - cell "59"
      - row "27 84":
        - cell "27"
        - cell "84"
      - row "28 99":
        - cell "28"
        - cell "99"
      - row "29 40":
        - cell "29"
        - cell "40"
  - text: 3,655,337
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Upload Files Test", async ({ page }) => {
   4 |   await page.goto("https://testautomationpractice.blogspot.com/");
   5 |   await page
   6 |     .locator("#singleFileInput")
   7 |     .setInputFiles("uploadFiles/index.html");
   8 |   await page.getByRole("button", { name: "Upload Single File" }).click();
   9 |   await expect(page.locator("#singleFileStatus")).toContainText("index.html");
  10 |
  11 |   await page
  12 |     .locator("#multipleFilesInput")
  13 |     .setInputFiles("uploadFiles/index.html", "uploadFiles/index2.html");
  14 |   await page.getByRole("button", { name: "Upload Multiple Files" }).click();
  15 |
  16 |   await expect(page.locator("#multipleFilesStatus")).toContainText(
  17 |     "Multiple files selected:"
  18 |   );
  19 |   await expect(page.locator("#multipleFilesStatus")).toContainText(
  20 |     "index.html"
  21 |   );
  22 |   await page.waitForTimeout(3000)
> 23 |   await expect(page.locator("#multipleFilesStatus")).toContainText(
     |                                                      ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  24 |     "index2.html"
  25 |   );
  26 |
  27 |   await page.waitForTimeout(5000);
  28 |   await page.close();
  29 | });
  30 |
```