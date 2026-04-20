---
slug: creating-a-personal-website
title: AI Made Me Do It
authors: [leahunderhill]
tags: [personal-website]
---

It has taken me the majority of my career to finally stand up a personal website. I have been putting it off for SO long that I thought it had to be this huge undertaking. I thought I had to put it up into the cloud and find a specific url name that I liked. I thought that I had to make it look beautiful and have all the things in it that show how fantastic I am at code. The real reason I have a website today is all thanks to AI. 

{/* truncate */}

## AI Did the Heavy Lifting

AI took all the grunt work out of setting up an application. It helped me identify issues faster; it helped me clean up my code quicker. It made things way easier than the unruly task of actually creating all the things. On top of that, I also realized that it didn't need to be perfect. I could have created a whole react app to showcase my skills and demonstrate just how good I am at code, but I also think starting with something is always easier than nothing. 

However, I did notice some key differences with AI as I was working with it that definitely made this all the more difficult. This is also where I feel there is a need for figuring out how AI can truly help software engineers and where it is hurting us. 

## Where Copilot Let Me Down

When I first started to set up this website, I was utilizing the free version of Github Copilot. Now, it worked well, do not get me wrong. It got me the infrastructure I needed, so I did not have to fully think through creating the new Docusaurus app myself. However, when I got to deploying this application to github pages, that is where I started to run into issue after issue. 

I really wanted to deploy my project via github actions. I figured it couldn't be hard. I have had a lot of experience in them with my current job. I had AI help me write up my deployment yaml. I looked it over and felt good, but next thing I knew after I had pushed the actions to main, it wasn't working. Now here I am thinking CoPilot is a built-in feature of Github. Capabilities to the max, it should have the answers about Github Actions. But it didn't. It took me about 4 hours of wasted time going through a loop of asking CoPilot to fix the deployment issue. I would push changes, there would be an issue, I'd come back to the code, add information about why it failed and it would loop again and try something different. 

"It's the free version of course it didn't work", fine whatever the free version should still give me some kind of instructions about general set up that are common for setting up github pages (or so I personally think). 

"After 4 hours, why were you still asking copilot to fix it for you?" Now that one is a good question, random thought in my head. Well that is because I personally was just curious if it could solve it for me. (okay, and I was lazy and didn't want to go google it at the time, even though I did try that and then gave up.) The answer was that it couldn't solve it for me. 

It kept putting me into a general loop of all the things I had already tried. Which for me personally, was an interesting learning opportunity to be like okay well maybe CoPilot isn't going to be helpful for me for this work. It definitely showed that there is a limit and sometimes you need to put in that good hard work to go google (the old-fashioned way). But to be honest, and something I have seen very commonly now that AI is new and upcoming is people not searching/confirming. People assume AI is and should be correct, but that is the wrong assumption. 

You should be researching alongside AI, especially if you don't understand the concepts you are asking it about. Something that one of my co-workers was telling me about the other day was the likelihood of hallucinations in AI. Now, if you have dived into AI and understand all the concepts you probably have heard of this. My co-worker was telling me about a paper that was written saying how AI will almost 100% of the time hallucinate. (I will try to find the paper and link it here) I fully believe it. I read this article today about hallucinations, ["New sources of inaccuracy? A conceptual framework for studying AI hallucinations"](https://misinforeview.hks.harvard.edu/article/new-sources-of-inaccuracy-a-conceptual-framework-for-studying-ai-hallucinations/), which had some really interesting points into why hallucinations happen.

Now, how often is that? How often can you catch it? Probably rarely... But it's always something good to keep in mind.

My friend/mentor recently tried a telephone experiment with AI agents. In all but the two he shared, they came out different. One even gave an answer in Chinese even though there was no request for it in the prompt.

## What This Means for Us as Engineers

When utilizing AI in projects, you have to be extremely cautious of what it is doing. You have to understand the concepts and ask the questions. I feel like that tends to be something people forget about as we are starting to utilize AI more and more. In the above research paper, at the end it says: "While today’s AI systems may not yet reach transhuman intelligence, the fluency, speed, and persuasive power are already challenging the stability of human knowledge-making processes". Which makes me think, how can we as software engineers put guardrails in place to help us make the right decisions, ask AI the right questions, and push the boundaries of how we use AI today? 

Yes, AI is so very helpful. Yes, it created my personal application for me in seconds. Yes, it has a plethora of answers for questions. But yes, we do also have to pay attention to what we are doing. If we as software engineers get into the habit of just letting AI run free, how are we going to be able to solve problems AI might create? How are we going to ask the right questions to fix those problems? How are we as software engineers going to better the software we are writing if we don't understand? Well I'll tell you my thoughts in a follow up blog post. ;)
