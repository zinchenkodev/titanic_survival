jQuery(function($){$('a[href*="#"]').on('click.smoothscroll',function(e){var hash=this.hash,_hash=hash.replace(/#/,''),theHref=$(this).attr('href').replace(/#.*/,'');if(theHref&&location.href.replace(/#.*/,'')!=theHref)return;var $target=_hash===''?$('body'):$(hash+', a[name="'+_hash+'"]').first();if(!$target.length)return;e.preventDefault();$('html, body').stop().animate({scrollTop:$target.offset().top-0},1000,'swing',function(){window.location.hash=hash;});});});$(document).ready(function(){$('form').on('submit',function(event){$.ajax({data:{pclass:$('#pclass').val(),age:$('#age').val(),sex:$('#sex').val(),travel_alone:$('#travel_alone').val()},type:'POST',url:'/app'}).done(function(data){if(data.error){$('#errorAlert').text(data.error).show();$('#successAlert').hide();}else{$(".form").css("display","none");$('#successAlert').text(data.name).fadeIn("slow");$('#errorAlert').hide();}});setTimeout(function(){$("#form_reset").trigger('reset');$("#form").fadeIn("slow");$('#successAlert').css("display","none");},4444);event.preventDefault();});});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiJCIsIm9uIiwiZSIsImhhc2giLCJfaGFzaCIsInJlcGxhY2UiLCJ0aGVIcmVmIiwiYXR0ciIsImxvY2F0aW9uIiwiaHJlZiIsIiR0YXJnZXQiLCJmaXJzdCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInJlYWR5IiwiZXZlbnQiLCJhamF4IiwiZGF0YSIsInBjbGFzcyIsInZhbCIsImFnZSIsInNleCIsInRyYXZlbF9hbG9uZSIsInR5cGUiLCJ1cmwiLCJkb25lIiwiZXJyb3IiLCJ0ZXh0Iiwic2hvdyIsImhpZGUiLCJjc3MiLCJuYW1lIiwiZmFkZUluIiwic2V0VGltZW91dCIsInRyaWdnZXIiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUMsU0FBU0MsQ0FBVCxDQUFXLENBQ2hCQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxFQUFsQixDQUFxQixvQkFBckIsQ0FBMkMsU0FBVUMsQ0FBVixDQUFhLENBQ3hELEdBQUlDLENBQUFBLElBQUksQ0FBRSxLQUFLQSxJQUFmLENBQXFCQyxLQUFLLENBQUtELElBQUksQ0FBQ0UsT0FBTCxDQUFhLEdBQWIsQ0FBaUIsRUFBakIsQ0FBL0IsQ0FBcURDLE9BQU8sQ0FBR04sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTyxJQUFSLENBQWEsTUFBYixFQUFxQkYsT0FBckIsQ0FBNkIsS0FBN0IsQ0FBb0MsRUFBcEMsQ0FBL0QsQ0FDQSxHQUFJQyxPQUFPLEVBQUlFLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjSixPQUFkLENBQXNCLEtBQXRCLENBQTRCLEVBQTVCLEdBQW1DQyxPQUFsRCxDQUE0RCxPQUM1RCxHQUFJSSxDQUFBQSxPQUFPLENBQUdOLEtBQUssR0FBSyxFQUFWLENBQWVKLENBQUMsQ0FBQyxNQUFELENBQWhCLENBQTJCQSxDQUFDLENBQUVHLElBQUksQ0FBRyxZQUFQLENBQXFCQyxLQUFyQixDQUE0QixJQUE5QixDQUFELENBQXFDTyxLQUFyQyxFQUF6QyxDQUNBLEdBQUksQ0FBRUQsT0FBTyxDQUFDRSxNQUFkLENBQXVCLE9BQ3ZCVixDQUFDLENBQUNXLGNBQUYsR0FDQWIsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQmMsSUFBaEIsR0FBdUJDLE9BQXZCLENBQStCLENBQUVDLFNBQVMsQ0FBRU4sT0FBTyxDQUFDTyxNQUFSLEdBQWlCQyxHQUFqQixDQUF1QixDQUFwQyxDQUEvQixDQUF3RSxJQUF4RSxDQUE4RSxPQUE5RSxDQUF1RixVQUFVLENBQ2pHQyxNQUFNLENBQUNYLFFBQVAsQ0FBZ0JMLElBQWhCLENBQXVCQSxJQUF2QixDQUNPLENBRlAsRUFHRyxDQVRILEVBVUQsQ0FYSyxDQUFOLENBYUFILENBQUMsQ0FBQ29CLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFVBQVcsQ0FFNUJyQixDQUFDLENBQUMsTUFBRCxDQUFELENBQVVDLEVBQVYsQ0FBYSxRQUFiLENBQXVCLFNBQVNxQixLQUFULENBQWdCLENBQ3BDdEIsQ0FBQyxDQUFDdUIsSUFBRixDQUFPLENBQ1JDLElBQUksQ0FBRyxDQUNOQyxNQUFNLENBQUd6QixDQUFDLENBQUMsU0FBRCxDQUFELENBQWEwQixHQUFiLEVBREgsQ0FFRkMsR0FBRyxDQUFHM0IsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMEIsR0FBVixFQUZKLENBR0ZFLEdBQUcsQ0FBRzVCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTBCLEdBQVYsRUFISixDQUlGRyxZQUFZLENBQUc3QixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CMEIsR0FBbkIsRUFKYixDQURDLENBT0xJLElBQUksQ0FBRyxNQVBGLENBUVJDLEdBQUcsQ0FBRyxNQVJFLENBQVAsRUFXQ0MsSUFYRCxDQVdNLFNBQVNSLElBQVQsQ0FBZSxDQUN0QixHQUFJQSxJQUFJLENBQUNTLEtBQVQsQ0FBZ0IsQ0FDZmpDLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJrQyxJQUFqQixDQUFzQlYsSUFBSSxDQUFDUyxLQUEzQixFQUFrQ0UsSUFBbEMsR0FDSW5DLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJvQyxJQUFuQixHQUNKLENBSEQsSUFJSyxDQUNBcEMsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXcUMsR0FBWCxDQUFlLFNBQWYsQ0FBMEIsTUFBMUIsRUFDSnJDLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJrQyxJQUFuQixDQUF3QlYsSUFBSSxDQUFDYyxJQUE3QixFQUFtQ0MsTUFBbkMsQ0FBMEMsTUFBMUMsRUFDSXZDLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJvQyxJQUFqQixHQUNKLENBQ0MsQ0FyQkQsRUF1QkFJLFVBQVUsQ0FBQyxVQUFXLENBQ3BCeEMsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQnlDLE9BQWpCLENBQXlCLE9BQXpCLEVBQ0F6QyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVd1QyxNQUFYLENBQWtCLE1BQWxCLEVBQ0F2QyxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CcUMsR0FBbkIsQ0FBdUIsU0FBdkIsQ0FBa0MsTUFBbEMsRUFDRCxDQUpTLENBSU4sSUFKTSxDQUFWLENBTUFmLEtBQUssQ0FBQ1QsY0FBTixHQUNGLENBL0JELEVBZ0NBLENBbENEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZnVuY3Rpb24oJCl7XG4gICQoJ2FbaHJlZio9XCIjXCJdJykub24oJ2NsaWNrLnNtb290aHNjcm9sbCcsIGZ1bmN0aW9uKCBlICl7XG4gIHZhciBoYXNoPSB0aGlzLmhhc2gsIF9oYXNoICAgPSBoYXNoLnJlcGxhY2UoLyMvLCcnKSwgdGhlSHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpLnJlcGxhY2UoLyMuKi8sICcnKTtcbiAgaWYoIHRoZUhyZWYgJiYgbG9jYXRpb24uaHJlZi5yZXBsYWNlKC8jLiovLCcnKSAhPSB0aGVIcmVmICkgcmV0dXJuO1xuICB2YXIgJHRhcmdldCA9IF9oYXNoID09PSAnJyA/ICQoJ2JvZHknKSA6ICQoIGhhc2ggKyAnLCBhW25hbWU9XCInKyBfaGFzaCArJ1wiXScpLmZpcnN0KCk7XG4gIGlmKCAhICR0YXJnZXQubGVuZ3RoICkgcmV0dXJuO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJHRhcmdldC5vZmZzZXQoKS50b3AgLSAwIH0sIDEwMDAsICdzd2luZycsIGZ1bmN0aW9uKCl7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cblx0JCgnZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICQuYWpheCh7XG5cdFx0XHRkYXRhIDoge1xuXHRcdFx0XHRwY2xhc3MgOiAkKCcjcGNsYXNzJykudmFsKCksXG4gICAgICAgIGFnZSA6ICQoJyNhZ2UnKS52YWwoKSxcbiAgICAgICAgc2V4IDogJCgnI3NleCcpLnZhbCgpLFxuICAgICAgICB0cmF2ZWxfYWxvbmUgOiAkKCcjdHJhdmVsX2Fsb25lJykudmFsKCksXG5cdFx0XHR9LFxuICAgICAgdHlwZSA6ICdQT1NUJyxcblx0XHRcdHVybCA6ICcvYXBwJ1xuXHRcdH0pXG4gICAgXG4gICAgLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcblx0XHRcdFx0JCgnI2Vycm9yQWxlcnQnKS50ZXh0KGRhdGEuZXJyb3IpLnNob3coKTtcbiAgICAgICAgJCgnI3N1Y2Nlc3NBbGVydCcpLmhpZGUoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuICAgICAgICAkKFwiLmZvcm1cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cdFx0XHRcdCQoJyNzdWNjZXNzQWxlcnQnKS50ZXh0KGRhdGEubmFtZSkuZmFkZUluKFwic2xvd1wiKTtcbiAgICAgICAgJCgnI2Vycm9yQWxlcnQnKS5oaWRlKCk7XG5cdFx0XHR9XG4gICAgfSk7XG4gICAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICQoXCIjZm9ybV9yZXNldFwiKS50cmlnZ2VyKCdyZXNldCcpO1xuICAgICAgJChcIiNmb3JtXCIpLmZhZGVJbihcInNsb3dcIik7XG4gICAgICAkKCcjc3VjY2Vzc0FsZXJ0JykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgfSwgKDQ0NDQpKTtcbiAgICBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9KTtcbn0pOyJdfQ==