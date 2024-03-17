/**
Leetcode
Singly Linked List
19. Remove Nth Node From End of List
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    function reverse(list)
    {
     
     let prev=null;
         let next=null;
         let current=list;
       
         while(current){
           
          next=current.next;
          current.next=prev;
          prev=current;
          current=next;

         }
        
return prev
    }

 let list=reverse(head)

let current=list;
if(n===1)
{
    list=list.next;
}
else{
let prev=null;

for(let i=1;i<n;i++)
{prev=current
    current=current.next;
}
  prev.next=current.next  }
return reverse(list)
 };