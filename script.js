<script type="text/javascript">
            <!-- var i = 0; -->
            var addCard = JSON.parse(sessionStorage.getItem('addCard'));
            var size = addCard.length;
			alert(size);
            document.getElementById('display').innerHTML = "<thead><tr> <th>S.no</th> <th>Buyers Name </th> <th>Shipping Address </th> <th>City </th> <th> Amount</th> <th>Phone</th> </tr></thead>";
            document.getElementById('display').innerHTML += "<tbody>";
            for (i = 0; i < size; i++) {
                var j = i + 1;
                document.getElementById('display').innerHTML += "<tr><td>" + j + " </td><td>" + addCard[i].bfname + "</td><td>" + addCard[i].address + "</td><td>" + addCard[i].city + "</td><td>" + addCard[i].inr + "</td><td>" + addCard[i].phone + "</td></tr>";
            }
            document.getElementById('display').innerHTML += "</tbody>";

        </script>