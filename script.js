
      function GetPrint()
      {
        window.print()
      }

      function BtnAdd()
      {
        var v = $("#TRow").clone().appendTo("TBody");
        $(v).find("input").val(' ');
        $(v).removeClass("d-none");
        
      }
      function BtnDel(v)
      {
        $(v).parent().parent().remove();
        GetTotal();
      }
      function Calc(v)
      {
        var index = $(v).parent().parent().index();
        
        var qty = document.getElementsByName("qty")[index].value;
        var rate = document.getElementsByName("rate")[index].value;

        var amt = qty * rate;
        document.getElementsByName("amt")[index].value = amt;
        GetTotal();
      }
      function GetTotal()
      {
        var sum =0;
        var amts = document.getElementsByName("amt");

        for (let index=0;index <amts.length;index++)
        {
          var amt = amts[index].value;
          sum = +(sum) + +(amt) ;
        }
        document.getElementById("FTotal").value = sum;

        var gst = document.getElementById("FGST").value;
        var net = +(sum) + +(gst) ;
        document.getElementById("FNet").value= net;


      }
   