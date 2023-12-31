# AACF Website Development

> UNSURE IF WE ARE USING NETLIFY YET FOR HOSTING. DOCUMENTATION TO BE UPDATED W/ SCREENSHOTS

## Initial Setup

1. Obtain password info from core team for Github & Netlify (?).
2. Log onto Github using the AACF account. 
3. Log onto Netlify (where the website is being hosted).(?)

## Local Development

- Clone the repository: `https://github.com/UW-AACF/UW-AACF-Website.git`
- Make a new branch.
- Install Gatsby CLI.
- Install the required packages with `npm install` in the repo directory.
- Run `gatsby develop`.
- Visit the localhost link to view changes in the browser.
- Save changes.
- Send a pull request to the master branch on GitHub.
- Check Netlify deploy status: [Netlify Dashboard](https://app.netlify.com/) (?)

## Changing Text via GitHub

1. Login to GitHub and click on the account icon in the top right corner.
2. Click "Your organizations".
3. Select the organization "UW-AACF".
4. Click on the GitHub project "UW-AACF-Website".
5. Navigate to the "src" folder.
6. Go to "posts".
7. Edit the desired `.md` file.
8. Make changes to the text between quotation marks.
9. Scroll down, add a title to your commit, and click "Commit changes".
10. Check Netlify.com to see if your commit is building. (?)

## Website Design/Layout Changes

### Info to Know

**Front-end:**
- Bootstrap
- Gatsby

**Back-end:**
- No backend service; front-end (React & GraphQL) pulls data from `.md` files.

### Development Steps

1. Create a local clone of the repo and make a new branch.
2. Host the local repo to preview your edits.
3. Push your code to your branch.
4. Create a Pull Request (PR).
5. Check if the PR builds properly on Netlify. (?)
6. Accept the PR and wait for the website to change on [Netlify Dashboard](https://app.netlify.com/). (?)

**Note:** Be cautious while editing text; any mistakes may impact the website's update.

## Website Structure

- Text for different pages is organized in the "src/posts" folder.
- Each `.md` file corresponds to a page on the website.
- For specific changes, click on a file, then click the pencil icon on the right.
- Make changes to text within quotation marks.
