<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    
    <template #heading>About me</template>

    <div class="Intro">
<p>Welcome to my personal website. I am a researcher in computer vision & machine learning with Ph.D in Computer Science, 
M.Sc & B.Sc(Hons.) in Electronic Engineering. I also have experience in web app development. This site is built by using 
Vue 3, JavaScript, HTML and CSS. This site is hosted by GitHub Pages.</p>
</div>

<div class="CV">
	<h2>CV</h2>
	<h3>Academic degrees</h3>
	<ul>
	<li>PhD in Computer Science </li>
	<li>M.Sc in Electronic Engineering</li>
	<li>B.Sc (Hons.) in Electrical & Electronic Engineering</li>
	</ul>
	
	<h3>Certificates</h3>
	<ul>
	<li>IBM Data Science Professional Certificate by IBM on Coursera</li>
	<li>Professional Certificate of "DeepLearning.AI TensorFlow Developer", by DeepLearning.AI
	    on Coursera</li>
	<li>Professional Certificate in "Unlocking Information Security" by Tel Aviv University, 
	    IsraelX & edX</li>
	</ul>
		
	<h3>Research specialism</h3>
	<ul>
	<li>Computer vision</li>
	<li>Machine learning</li>
	</ul>

	<h3>Skills & experience</h3>
	<ul>
	<li>Programming languages: Python, Java, JavaScript, C++</li>
	<li>Web frameworks: Flask, Django, ReactJS, Svelte, Vue</li>
	<li>Machine learning library: Tensorflow, scikit-learn, Weka</li>
	<li>Computer vision library: OpenCV, scikit-image</li>
	</ul>
</div>
<p>This site is under construction</p>		
  </WelcomeItem>


  <WelcomeItem>
   
    <template #heading>Notice</template>

    <div class="Footer">
	<p>This site might use cookies in order to improve the web browsing experience of users. If you continue to 
	use this site, it will be assumed you agree to the use of cookies.</p>
</div>
  </WelcomeItem>
</template>
