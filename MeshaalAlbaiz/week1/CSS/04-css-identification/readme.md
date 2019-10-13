##Selector identification

Identify the selectors in each style and what HTML element(s) they target.
Also, which of these examples have errors? What are they?

###1
```
p {
  color: white;
} 
True

###2
```
span {
  padding: 15px;
} 
```
Wrong , span is inline tag can't define it as selector 

###3
```
table td {
  color: #222;
} 
```
TRUE

###4
```
.lede-section #left-side {
  position: absolute;
}  
```
TRUE

###5
```
#section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold; 
} 
```
TRUE

##What's different about the following three selectors?

###6
```
.fewd25-page-section .another-class {
  text-align: center; 
}
```
/* difine two classes

###7
```
.fewd25-page-section, .another-class {
  text-align: center; 
}
```
D

###8
```
.fewd25-page-section.another-class {
  text-align: center;
}
```
