class Base 
 { 
 public void M1() 
 { 
 System.out.println(“ Base Class Method ”); 
 } 
 } 
class Derived extends Base 
{ 
 public void M2() 
 { 
 System.out.printIn(“ Derived Class Methods “); 
 } 
} 
class Test 
{ 
 public static void main(String[] args) 
 { 
 Derived d = new Derived(); // creating object 
 d.M1(); // print Base Class Method 
 d.M2(); // print Derived Class Method 
 } 
}